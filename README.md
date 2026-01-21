# Validação de Formulário

## 📋 Sobre o Projeto

Este projeto é um **desafio proposto pelo professor Luan Oliveira** com apoio da **In100tiva**, com o objetivo de criar um validador de formulário funcional utilizando HTML, CSS e JavaScript puro.

Trata-se de um formulário simples de cadastro que valida os campos em tempo real e exibe mensagens de erro e sucesso ao usuário.

---

## 🚀 Como Rodar o Código

### Requisitos
- Um navegador web moderno (Chrome, Firefox, Safari, Edge, etc.)
- Nenhuma dependência externa ou instalação necessária

### Passos para Executar

1. **Clone ou baixe o repositório:**
   ```bash
   git clone <url-do-repositorio>
   cd validacao-de-forms
   ```

2. **Abra o arquivo `index.html` no navegador:**
   - **Opção 1:** Duplo clique no arquivo `index.html`
   - **Opção 2:** Clique com botão direito → Abrir com → Navegador
   - **Opção 3:** Use uma extensão como Live Server no VS Code para servir localmente

3. **Teste o formulário:**
   - Digite nos campos de nome e email
   - Veja a validação em tempo real
   - Envie o formulário para ver a mensagem de sucesso

---

## 🛠️ Como Foi Feito

### Estrutura do Projeto

O projeto é composto por 3 arquivos principais:

#### **1. HTML (index.html)**
- Define a estrutura do formulário
- Contém dois campos de entrada: Nome e E-mail
- Inclui divs para exibir mensagens de erro e sucesso
- Atributo `novalidate` desabilita a validação nativa do navegador para permitir validação customizada

#### **2. CSS (style.css)**
- Estiliza o formulário e container
- Define estilos para mensagens de erro (vermelhas) e sucesso (verdes)
- Aplica efeitos de feedback visual ao usuário
- Adapta o layout para responsividade

#### **3. JavaScript (script.js)**
Implementa toda a lógica de validação:

**Validação ao Enviar:**
- Captura o evento de `submit` do formulário
- Valida se o campo nome não está vazio
- Valida se o campo email não está vazio E é um email válido (usando `checkValidity()`)
- Se válido: exibe mensagem de sucesso, limpa o formulário e oculta a mensagem após 3 segundos
- Se inválido: exibe as mensagens de erro correspondentes

**Validação em Tempo Real:**
- Evento `blur` (ao sair do campo) valida o conteúdo
- Define mensagens de erro customizadas quando o campo está vazio
- Evento `input` remove a validação personalizada ao usuário começar a digitar novamente

### Funcionalidades Principais

✅ Validação de campos obrigatórios  
✅ Validação de formato de email  
✅ Feedback em tempo real  
✅ Mensagens de erro claras  
✅ Mensagem de sucesso ao enviar  
✅ Sem dependências externas  
✅ Código limpo e bem comentado  

---

## 📝 Exemplo de Uso

1. Abra o formulário no navegador
2. Deixe os campos vazios e tente enviar → Verá mensagens de erro
3. Preencha o nome corretamente mas e-mail inválido → Mensagem de erro do email
4. Preencha todos os campos corretamente → Mensagem de sucesso e limpeza do formulário

---

## 🎓 Tecnologias Utilizadas

- **HTML5** - Estrutura semântica
- **CSS3** - Estilização e efeitos visuais
- **JavaScript** - Lógica de validação sem frameworks

---

## 📞 Autoria

Desenvolvido por Marcos Aurélio como desafio da In100tiva sob orientação do professor Luan Oliveira.

---

## 📄 Licença

Este projeto é fornecido como material de aprendizado.
