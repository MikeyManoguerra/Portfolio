const util = (function () {

  const firstChildRef = el => el.firstElementChild

  function createListItem(text, classPrefix) {
    return createElementWithClass('li', `${classPrefix}list-item`, text)
  }

  //  takes an array of strings and inserts them into a list
  function createSimpleList(array, classPrefix) {
    const ul = document.createElement('ul')
    ul.setAttribute('class', `${classPrefix}list`)
    array.forEach(item => ul.appendChild(createListItem(item, classPrefix)))

    return ul
  }

  // not really a util
  function createCurrentlyList(array, classPrefix) {
    const ul = createElementWithClass('ul', `${classPrefix}list`)
    array.forEach(position => {
      const li = createElementWithClass('li', `${classPrefix}list-item`)
      li.append(createElementWithClass('p', '', position.location))
      li.append(createElementWithClass('p', '', position.description))
      ul.append(li)
    })
    return ul
  }


  function createElementWithClass(type, className='', text='') {
    const el = document.createElement(type)
    if(className) el.setAttribute('class', className)
    if(text) el.innerText = text

    return el
  }

  return {
    firstChildRef,
    createSimpleList,
    createCurrentlyList,
    createElementWithClass,
  }

})()
