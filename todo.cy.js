
context('TodoMVC',()=>{
    it('Adicionar tarefa',()=>{
        cy.visit('https://todomvc.com/examples/vue/')
        cy.get('input.new-todo').type('Estudar automação{enter}')

        cy.get('ul.todo-list li.todo').should('have.length',1)
    })
});