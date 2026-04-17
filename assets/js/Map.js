// Coordenadas de Januária (Destino Fixo)
const januariaLat = -15.4851;
const januariaLng = -44.3653;

// Inicializa o mapa focado em Januária
const map = L.map('map').setView([januariaLat, januariaLng], 13);

// Adiciona a camada de mapa do OpenStreetMap
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
}).addTo(map);

// Adiciona um marcador no destino final
L.marker([januariaLat, januariaLng]).addTo(map)
    .bindPopup('<b>Januária, MG</b><br>Destino final.')
    .openPopup();

let controleDeRota = null;
let nomeOrigemAtual = ""; // Variável para guardar o nome da cidade atual

// 1. Cria um controle customizado do Leaflet para ser o nosso novo painel
const painelResumo = L.control({ position: 'topright' });

painelResumo.onAdd = function () {
    const div = L.DomUtil.create('div', 'painel-resumo');
    div.id = 'painel-resumo';
    div.style.display = 'none'; // Começa escondido até calcularmos a rota
    return div;
};
painelResumo.addTo(map);

// Adiciona o evento de pressionar a tecla "Enter" no campo de busca
document.getElementById('cidadeOrigem').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        event.preventDefault();
        buscarCidade();
    }
});


// 2. Função para traçar a rota (Agora recebe o nome da cidade)
function tracarRota(origemCoords, nomeOrigem = "Sua Origem") {
    nomeOrigemAtual = nomeOrigem;
    const origem = L.latLng(origemCoords[0], origemCoords[1]);
    const destino = L.latLng(januariaLat, januariaLng);

    // Mostra um aviso de "Calculando..." enquanto o Mapbox pensa
    const painel = document.getElementById('painel-resumo');
    if (painel) {
        painel.style.display = 'block';
        painel.innerHTML = `<p style="color: #666; margin: 0; font-size: 14px;">Calculando rota...</p>`;
    }

    if (controleDeRota) {
        // Se já existe, apenas atualiza os pontos (isso vai disparar o 'routesfound' novamente)
        controleDeRota.setWaypoints([origem, destino]);
    } else {
        // Cria a rota
        controleDeRota = L.Routing.control({
            waypoints: [origem, destino],
            router: L.Routing.mapbox('pk.eyJ1Ijoiam1hcmNvc2djIiwiYSI6ImNtbzM4bHc0cDEzZDIycXFhcGhreXgzc2cifQ.hJeudupX9NMdfZS0DlKQ5Q'), 
            routeWhileDragging: false,
            language: 'pt', 
            showAlternatives: false,
            fitSelectedRoutes: true,
            show: false, // Mantém o painel padrão feio oculto
            lineOptions: {
                styles: [{ color: '#0056b3', weight: 5 }]
            }
        }).addTo(map);

        // 3. O SEGREDO: Escuta o evento de "rota encontrada" e extrai os dados!
        controleDeRota.on('routesfound', function(e) {
            const rotas = e.routes;
            const resumo = rotas[0].summary; // Pega o resumo da melhor rota
            
            // A API devolve em metros. Convertendo para KM com 1 casa decimal:
            const distanciaKm = (resumo.totalDistance / 1000).toFixed(1);
            
            // A API devolve em segundos. Convertendo para Horas e Minutos:
            const tempoTotalMinutos = Math.round(resumo.totalTime / 60);
            const horas = Math.floor(tempoTotalMinutos / 60);
            const minutos = tempoTotalMinutos % 60;
            
            let textoTempo = '';
            if (horas > 0) textoTempo += `${horas}h `;
            textoTempo += `${minutos}min`;

            // Formata a primeira letra maiúscula (caso busquem digitando minúsculo)
            const nomeFormatado = nomeOrigemAtual.charAt(0).toUpperCase() + nomeOrigemAtual.slice(1);

            // Injeta o HTML dentro do nosso painel customizado
            const painelEl = document.getElementById('painel-resumo');
            painelEl.innerHTML = `
                <div class="resumo-cidades">
                    <p class="cidade-linha">Origem: ${nomeFormatado}</p>
                    <p class="cidade-linha">Destino: Januária, MG</p>
                </div>
                <div class="resumo-info">
                    <p><strong>Distância:</strong> ${distanciaKm} km</p>
                    <p><strong>Tempo médio:</strong> ${textoTempo}</p>
                </div>
            `;
        });

        // Tratamento de erros
        controleDeRota.on('routingerror', function(e) {
            console.error('Erro de roteamento:', e.error);
            const painelEl = document.getElementById('painel-resumo');
            if(painelEl) painelEl.innerHTML = `<p style="color: red; margin: 0;">Erro ao calcular rota.</p>`;
            alert('Não foi possível traçar a rota neste momento. Tente novamente.');
        });
    }
}

// 4. Função de buscar cidade (Também repassa o nome)
async function buscarCidade() {
    const nomeCidade = document.getElementById('cidadeOrigem').value;
    if (!nomeCidade) {
        alert('Por favor, digite o nome de uma cidade.');
        return;
    }

    try {
        const response = await fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(nomeCidade)}`);
        const data = await response.json();

        if (data && data.length > 0) {
            const lat = parseFloat(data[0].lat);
            const lon = parseFloat(data[0].lon);
            
            // Passa a LAT, a LON e o NOME digitado pelo usuário
            tracarRota([lat, lon], nomeCidade);
        } else {
            alert('Cidade não encontrada. Tente incluir o estado, ex: "Pirapora, MG".');
        }
    } catch (error) {
        console.error('Erro na busca da cidade:', error);
        alert('Erro ao buscar a cidade. Tente novamente mais tarde.');
    }
}