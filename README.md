# SIGAA - Protótipo acadêmico (React + Vite)

Sistema desktop (1440x1024) para professores gerenciarem **notas** e **frequência** com navegação completa.

## Rotas

- `/` Dashboard
- `/notas` Lançamento de Notas
- `/alunos/:id` Detalhe do Aluno
- `/notas/sucesso` Confirmação de Nota
- `/frequencia` Registro de Frequência
- `/frequencia/sucesso` Confirmação de Frequência
- `/planilha` Planilha Completa

## StudentCarousel

Componente em `src/app/components/StudentCarousel.tsx`, usado em:

- `src/app/pages/GradesEntry.tsx`
- `src/app/pages/AttendanceRegistry.tsx`

Ele sincroniza `selectedStudentId` com painel central e tabelas.

## Fluxo de navegação

1. Selecione aluno no carrossel ou linha da tabela.
2. Edite nota/frequência.
3. Salve para ir à tela de confirmação.
4. Retorne ao Dashboard ou continue no módulo.

## Rodando

```bash
npm install
npm run dev
```