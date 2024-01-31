function previewFile() {
    const preview = document.querySelector("img");
    const file = document.querySelector("input[type=file]").files[0];
    const reader = new FileReader();
  
    reader.addEventListener("load", () => {
        preview.src = reader.result;
    }, false);
  
    if (file) {
      reader.readAsDataURL(file);
    }
  }

  document.querySelector('.create').addEventListener('click', () => {
    let data = []
    document.querySelectorAll('.form').forEach(form => {
      let formData = new FormData(form);

      if (form.getAttribute('name') == 'head'){
        data.push({
          type: form.getAttribute('name'),
          body: document.querySelector('img').src,

        }) 
      
      }
else
      data.push({
        type: form.getAttribute('name'),
        body: getFormInputData(formData),
        
      })
    })
     localStorage.setItem('data', JSON.stringify(data));
    
  })

// function getFormInputData(formData) {
//   let data = {};
//   for (let [name, value] of formData){
//     data[name] = value;
//   }
//   return data;
// }

function getFormInputData(formData) {
  let data = {};
  
  for (let [name, value] of formData) {
    if (!data[name]) {
      // data[name] = [];
      data[name] = ' ';
    }
    data[name].push(value);
  }
  if(value = ''){
    
  }
  return data;
  }

document.querySelector('.add_skill').addEventListener('click', () => { 
  createinput ('skills', 'новый навык', 'skill');
});
document.querySelector('.add_success').addEventListener('click', () => { 
  createinput ('successes', 'новое успех', 'success');
});
document.querySelector('.add_expirience').addEventListener('click', () => { 
  createinput ('expirience', 'новое место работы', 'expirience_place');
});


function createinput (formname, placeholder, name) {
  const inputE1 = document.createElement('input');
  inputE1.type = 'text';
  inputE1.placeholder = placeholder;
  inputE1.name = name
  
  document.querySelector(`[name="${formname}"]`).appendChild(inputE1)
  }
  document.querySelector('.add_date_start').addEventListener('click', () => { 
    createinputDate ('date_start', 'дата начала', 'work_start');
  });
  document.querySelector('.add_date_finish').addEventListener('click', () => { 
    createinputDate ('date_finish', 'дата увольнения', 'work_finish');
  });

  function createinputDate (formname, placeholder, name) {
    const inputE2 = document.createElement('input');
    inputE2.type = 'date';
    inputE2.placeholder = placeholder;
    inputE2.name = name
    
    document.querySelector(`[name="${formname}"]`).appendChild(inputE2)
    }




document.querySelector('.see').addEventListener('click', () => {
  setTimeout(function(){
      window.location.href='resume.html';   
    }, 1000);     
  })  

  
    
    




// Находим каждую форму. Затем создаем функцию getFormInputData в которой из formData достаем переменные 
// name and value и присваиваем значнеию value name
// Затем в пустой список data мы кидаем объекты 

// document.querySelector('.create').addEventListener('click', ()=> {
//   let data = [];
//   document.querySelectorAll('.form').forEach(form => {
//     let formData = new FormData(form);

//     // для фото
//     if (form.getAttribute('name') === 'head') {
//       data.push({
//         type: form.getAttribute('name'),
//         body: document.querySelector('img').src,
//       });
//     } else {
//       data.push({
//         type: form.getAttribute('name'),
//         body: getFormInputData(formData),
//       });
//     }
//     localStorage.setItem('key', JSON.stringify(data))
// });
// });

/*
* У меня есть вот такой код
* function getFormInputData(formData) {
let data = {};
for (let [name, value] of formData) {
    data[name] = value;
}

return data;
}
* Он делает свою работу хорошо, но есть одна проблема. Я хочу добавить больше полей в форму skill
* но в объекте получается skill: 'hard worker', хотя я создал много полей input в которых было много навыков
* */




