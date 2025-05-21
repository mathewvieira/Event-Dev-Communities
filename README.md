# EventDev Communities

## Iniciar o Projeto

1. `npm install` ou `npm run setup`

2. `npm run dev`

---

## Padrões de Nomenclatura

- Branches: `type(scope)/description`

- Commits: `type(scope): description`

---

## Procedimento Inicias

1. Se atribua a uma ISSUE.

2. Crie uma branch seguindo os padrões de nomenclatura (nomeie de acordo com a demanda).

3. Abra um PR a partir da sua branch apontando para a MAIN.

---

## Procedimentos Finais

1. Junte todos os commits (somente os seus) antes de "mandar para revisão":

   Ex: `git rebase -i HEAD~5`

   - Dica: HEAD~(número de commits que precisam ser mesclados)

2. Após concluir o rebase iterativo, atualize SUA BRANCH com base na MAIN:

   Ex: `git rebase main`

3. Solicite a revisão do PR vinculado a sua branch.
