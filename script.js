//Adicionar tarefa:

function adicionarTarefa() {

	//Título da tarefa:
	tituloTarefa = document.querySelector('#tituloTarefa').value

	if(tituloTarefa) {

		//Clonar Template:
		template = document.querySelector('.template')
		tarefa = template.cloneNode(true)

		//Adicionar Título:

		tarefa.querySelector('.tituloTarefa').textContent = tituloTarefa

		//Remover as classes desnecessárias
		tarefa.classList.remove('template')
		tarefa.classList.remove('hide')

		//Adicionar tarefa na lista:
		listaTarefas = document.querySelector('.listaTarefas')

		listaTarefas.appendChild(tarefa)

		//Limpar input e focar:
		document.querySelector('#tituloTarefa').focus()
		document.querySelector('#tituloTarefa').value = ''
		
		//Adicionar Evento de remover:

		btnApagar = tarefa.querySelector('.btnApagar').addEventListener('click', function(){
			
			removerTarefa(this)
		})

		

		//Adicionar evento de marcar:

		btnMarcar = tarefa.querySelector('.btnMarcar').addEventListener('click', function(){
			
			marcarTarefa(this)
		})

		//Função de marcar tarefa:
		function marcarTarefa(task){
			(task.parentNode).parentNode.classList.toggle('marcado')
		}
	}
	
}


addBtn = document.querySelector('.btnAdd')

addBtn.addEventListener('click', function(e){
	e.preventDefault()

	adicionarTarefa()

})

//Função de remover tarefa:

function removerTarefa(task) {
	(task.parentNode).parentNode.remove(true)
}

