
//listener for add task button hearing click
document.getElementById('btnTaskTitle').addEventListener('click', Create); 


//Main fxn that creates the task and all dynamic elements for each task
//such as creating each set of inner buttons and functionality

function Create() {

	var $title = document.getElementById('inpTaskTitle');



	if ($title.value !== "") {



		//UL elements
		var $ulCurrentTask = document.getElementById('ulCurrentTask');
		var $ulCompletedTasks = document.getElementById('ulCompletedTasks');

		//create DOM elements		

		var $tag_taskPanelDiv = document.createElement('div');
		$tag_taskPanelDiv.className += "taskPanel";

		var $tag_taskTitleDiv = document.createElement('div');
		$tag_taskTitleDiv.className += "taskTitle";

		var $tag_h2 = document.createElement('h2');
		$tag_h2.innerHTML = $title.value; //assign value from task input to new task pane title

		var $tag_taskBtnDiv = document.createElement('div');
		$tag_taskBtnDiv.className += "taskBtn";

		var $tag_iCheck = document.createElement('i');
		$tag_iCheck.className += "material-icons";
		$tag_iCheck.innerHTML = "check_circle";

		var $tag_iEdit = document.createElement('i');
		$tag_iEdit.className += "material-icons";
		$tag_iEdit.innerHTML = "mode_edit";

		var $tag_iDelete = document.createElement('i');
		$tag_iDelete.className += "material-icons";
		$tag_iDelete.innerHTML = "delete_forever";


		
		//append DOM elements


		$tag_taskTitleDiv.appendChild($tag_h2);

		$tag_taskBtnDiv.appendChild($tag_iCheck);
		$tag_taskBtnDiv.appendChild($tag_iEdit);		
		$tag_taskBtnDiv.appendChild($tag_iDelete);

		$tag_taskPanelDiv.appendChild($tag_taskTitleDiv);
		$tag_taskPanelDiv.appendChild($tag_taskBtnDiv);


		//append created Task element to UL

		$ulCurrentTask.appendChild($tag_taskPanelDiv);


		$title.value = "";

		
		//functionality for buttons inside each task panel, created
		//dynamically with each task

		//CheckRedo Button

		$tag_iCheck.addEventListener('click', function() {

			//vars for this fxn 
			var $$parentDiv = this.closest('.taskPanel');
			var $$btnCheckRedo = $$parentDiv.firstChild.nextSibling.firstChild;


			// if/then statement to determing location of task pane based on btnCheckRedo's innerHTML (thus icon)

			if ($$btnCheckRedo.innerHTML === "check_circle") {

				$ulCompletedTasks.appendChild($$parentDiv);



				$$parentDiv.style.backgroundColor = "#2E2E2E";
				$$parentDiv.firstChild.firstChild.style.color = "#F6F4F3";
				$$parentDiv.firstChild.firstChild.style.textDecoration = "line-through";
				$$btnCheckRedo.style.color = "#F6F4F3";
				$$btnCheckRedo.innerHTML = "redo";
				$$parentDiv.firstChild.nextSibling.firstChild.nextSibling.style.color = "#F6F4F3";			
				$$parentDiv.firstChild.nextSibling.firstChild.nextSibling.nextSibling.style.color = "#F6F4F3";

			} else {

				$ulCurrentTask.appendChild($$parentDiv);


				$$parentDiv.style.backgroundColor = "#F6F4F3";
				$$parentDiv.firstChild.firstChild.style.color = "#2E2E2E";
				$$parentDiv.firstChild.firstChild.style.textDecoration = "none";
				$$btnCheckRedo.style.color = "#2E2E2E";
				$$btnCheckRedo.innerHTML = "check_circle";
				$$parentDiv.firstChild.nextSibling.firstChild.nextSibling.style.color = "#2E2E2E";			
				$$parentDiv.firstChild.nextSibling.firstChild.nextSibling.nextSibling.style.color = "#2E2E2E";



			}




		}); //end of CheckRedo Button

		// Edit button

		var $$bool = false; // declared here to preserve value. Only used for edit button

		//create edit panel elements

		var $$editPaneHTML = document.createElement('div');
		$$editPaneHTML.className += "editPane";
		$tag_taskPanelDiv.appendChild($$editPaneHTML);

		var $$editInputHTML = document.createElement('input');
		$$editInputHTML.setAttribute('type', 'input');
		$$editPaneHTML.appendChild($$editInputHTML);

		var $$editBtnHTML = document.createElement('i');
		$$editBtnHTML.className += "material-icons";
		$$editBtnHTML.innerHTML = "cancel";

		$$editPaneHTML.appendChild($$editBtnHTML);


		//edit button fxn to display edit panel
		$tag_iEdit.addEventListener('click', function() {

			

			if ($$bool === false) {

				
				$$editPaneHTML.style.display = "block";

				$$editInputHTML.value = $tag_h2.innerHTML;





				$$bool = true;
				

			} //end of if


			//fxn to cancel/close edit pane
			$$editBtnHTML.addEventListener('click', function() {

				var $$removePlaceholder
				$$editPaneHTML.style.display = "none";
				$$bool = false;

			});

			//fxn to listen for enter and update task title
			$$editInputHTML.addEventListener('keydown', function(e) {

				if (13 == e.keyCode){
					if ($$editInputHTML.value !== "") {
						$tag_h2.innerHTML = $$editInputHTML.value;
						$$editPaneHTML.style.display = "none";
						$$bool = false;
					}
				}

			});

		}); //end of EDIT button



		//functionality to remove this task

		$tag_iDelete.addEventListener('click', function() {

			$tag_taskPanelDiv.remove();

		})






	}

};

//listener for add task btn hearing return/enter key press
document.getElementById('inpTaskTitle').addEventListener('keydown', function(e){


	if (13 == e.keyCode) {
		Create();
	}


});


