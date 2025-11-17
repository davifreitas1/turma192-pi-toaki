# 🚀 Guia de Desenvolvimento do Repositório HTML

Este repositório possui uma pasta para cada tela do Figma dentro da pasta `telas`. Cada grupo irá construir sua página HTML dentro desta pasta.

Todas as pastas possuem um arquivo chamado `base.html` onde contém uma pré-configuração que importa todos os estilos dos componentes CSS. Você ainda precisa abrir o `index.html` dentro da pasta `toaki-componentes-css` para poder copiar suas tags.

---

### 1. Passo a passo para iniciar o desenvolvimento
Aqui está a ordem dos comandos para começar a trabalhar na sua tela:

* Clonar o repositório principal:
    ```bash
    git clone https://github.com/davifreitas1/turma192-pi-toaki.git
    ```
* Entrar na pasta do projeto:
    ```bash
    cd .\turma192-pi-toaki
    ```
* Garantir que está na `main` mais recente:
    ```bash
    git pull origin main
    ```
* Inicializar e atualizar o toaki-componentes-css:
    ```bash
    git submodule update --init
    ```
    ```bash
    git submodule update --remote --merge
    ```
* Criar sua branch de trabalho:
    ```bash
    git branch insira-aqui-o-nome-da-sua-branch
    ```
* Mudar para a sua nova branch:
    ```bash
    git checkout insira-aqui-o-nome-da-sua-branch
    ```

### 2. Passo a passo para enviar suas alterações
Aqui está ordem para fazer as entregas dos seus commits na branch já criada:

* Atualizar sua branch com a versão do repositório remoto (caso alguém tenha atualizado):
    ```bash
    git pull origin insira-aqui-o-nome-da-sua-branch
    ```
* Adicionar os arquivos que você criou ou alterou:
    ```bash
    git add insira-aqui-os-arquivos-que-criou/alterou
    ```
* Fazer o commit (salvar as alterações localmente):
    ```bash
    git commit -m 'insira sua descrição do commit'
    ```
* Enviar suas alterações para o repositório remoto (GitHub):
    ```bash
    git push origin insira-aqui-o-nome-da-sua-branch
    ```

---

# Considerações Finais

Ao longo do desenvolvimento, me comprometo a ajudar, direcionar, revisar e principalmente ouvir quaisquer pessoas com dúvidas, feedbacks, sugestões e adições ao meu trabalho.

**Bora entregar um PI apaixonante, galera <3**
