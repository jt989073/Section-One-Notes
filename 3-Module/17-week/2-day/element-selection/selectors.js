const select = () => {
    /* Write queries for each of the following */

    /* Section 1 */
    // 1. Get all seeded fruit elements
    // Your code here
    // const seeded = document.querySelectorAll('.seed')
    const seeded = document.getElementsByClassName('seed')
    console.log(seeded)
    
    // 2. Get all seedless fruit elements
    // Your code here
    const seedless = document.querySelectorAll('.seedless')
    console.log(seedless)

    // 3. Get first seedless fruit element
    // Your code here
    const firstSeedLess = document.querySelector('.seedless')
    // firstSeedLess.innerText += '!!!'
    console.log(firstSeedLess)

    /* Section 2 */
    // 4. Get inner span with text "you"
    // Your code here
    const spans = [...document.getElementsByTagName('span')]
    // console.log([...spans])
    spans.forEach(span => {
        if(span.innerText === 'you'){
            console.log(span.innerText)
        }
    })
    // console.log(you.innerText)
    // 5. Get all children of element "wrapper"
    // Your code here
    const wrapperChildren = document.querySelector('#wrapper')
    console.log(wrapperChildren.children)
    // 6. Get all odd number list items in the list
    // Your code here
    const odds = document.querySelectorAll('.odd')
    console.log(odds)

    // 7. Get all even number list items in the list
    // Your code here
    const evens = document.querySelectorAll('#two li:nth-child(even)')
    console.log(evens)

    /* Section 3 */
    // 8. Get all tech companies without a class name
    // Your code here
    const classLess = document.querySelectorAll('#three a:not([class])')
    console.log(classLess)

    // 9. Get "Amazon" list element
    // Your code here
    const amazon = document.querySelector('.shopping')
    console.log(amazon)

    // 10. Get all unicorn list elements (not the image element)
    // Your code here
    const unicorns = document.querySelectorAll('#three li')
    console.log(unicorns)
}

window.onload = select;