1Guia de Uso do Git - Projeto GuiaJanu
Este documento define o fluxo básico de trabalho com o Git para a nossa equipe. Seguir esses passos garante que o código de todos fique sincronizado e evita conflitos no repositório.

1. Baixando o Projeto (Apenas na primeira vez)
Para começar a trabalhar, você precisa baixar o repositório do GitHub para a sua máquina local.
git clone https://github.com/jmarcosgc/GuiaJanu---UCE.git

A partir daqui, o projeto estará na sua máquina e você poderá usar os comandos abaixo.

2. Entendendo os Ambientes
Antes de ir para os comandos do dia a dia, é importante entender a diferença entre os ambientes:
Stage (Área de Preparação): Em curtas palavras, o stage é um lugar (uma "sala de espera") onde os arquivos ficarão armazenados antes de serem atualizados diretamente no Git. Por exemplo: se você editar o arquivo index.html, você joga o arquivo no stage e depois sobe para o Git.
Git (Local): É o sistema de controle de versões rodando apenas na sua máquina.
GitHub (Remoto): É o servidor na nuvem onde o projeto final fica armazenado para toda a equipe.

3. Fluxo de Trabalho Diário
Sempre que for criar ou editar algo no projeto, siga esta ordem de comandos:
Passo A: Verificar o Status Verifique quais arquivos foram modificados e como está o seu stage.
git status

Passo B: Adicionar ao Stage Prepare os arquivos modificados para serem salvos.
git add 'nome_arquivo.extensao'  # Adiciona um arquivo específico no stage
git add .                        # Adiciona TUDO o que foi alterado no stage

Passo C: Salvar no Git Local (Commit) Aqui você efetiva a alteração, atualizando o Git na sua máquina.

git commit -m "Título do commit explicando o que foi feito"

(Lembre-se: Até aqui, a atualização ocorreu apenas no Git local da sua máquina. Agora você precisa subir para o GitHub).
Passo D: Atualizar sua máquina (RECOMENDADO) Regra de ouro: Antes de realizar um push (enviar), sempre realize um pull (puxar). Outra pessoa da equipe pode ter enviado alterações para o GitHub nesse intervalo.
git pull

O git pull atualiza a sua máquina em relação ao que está no GitHub.
Passo E: Enviar para o GitHub Após garantir que sua máquina está atualizada, suba as suas alterações para a nuvem.
git push

O git push atualiza o GitHub em relação à sua máquina.

Codificou ➔ git status ➔ git add . ➔ git commit -m "..." ➔ git pull ➔ git push


4. Estrutura do Projeto
Para manter o nosso código organizado e facilitar o trabalho em equipe, todos os arquivos do site devem seguir rigorosamente a estrutura de pastas abaixo.

raiz {
  index.html
  /pages/ {
	  /pages/arquivos.html
  }
  /assets/ {
		/assets/css/arquivos.css
		/assets/js/arquivos.js
		/assets/img/arquivos_de_imagem
		/assets/videos/arquivos_de_video
  }
}
