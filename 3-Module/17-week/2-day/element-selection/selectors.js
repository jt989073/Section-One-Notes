const select = () => {
    /* Write queries for each of the following */

    /* Section 1 */
    // 1. Get all seeded fruit elements
    // Your code here
    // const seeded = document.getElementsByClassName('seed')
    const seeded = document.querySelectorAll('.seed')
    console.log(seeded)
    
    // 2. Get all seedless fruit elements
    // Your code here
    const seedless = document.querySelectorAll('.seedless')
    console.log(seedless)

    // 3. Get first seedless fruit element
    // Your code here
    const firstSeedless = document.querySelector('.seedless')
    // firstSeedless.innerText += '!!!!'
    console.log(firstSeedless)

    /* Section 2 */
    // 4. Get inner span with text "you"
    // Your code here
    // const you = Array.from(document.getElementsByTagName('span')).filter(span => span.innerText === 'you')
    const you = document.querySelector('p span')
    console.log(you)

    // 5. Get all children of element "wrapper"
    // Your code here
    const wrapper = document.getElementById('wrapper').children
    console.log(wrapper)


    // 6. Get all odd number list items in the list
    // Your code here
    const odd = document.querySelectorAll('ol .odd')
    console.log(odd)

    // 7. Get all even number list items in the list
    // Your code here
    const even = document.querySelectorAll('ol li:nth-child(even)')
    console.log(even, 'eveens')

    /* Section 3 */
    // 8. Get all tech companies without a class name
    // Your code here
    const classLess = document.querySelectorAll('#three a:not([class])')
    console.log(classLess)

    // 9. Get "Amazon" list element
    // Your code here
    const shopping = document.querySelector('.shopping')
    console.log(shopping)

    // 10. Get all unicorn list elements (not the image element)
    // Your code here
    const unicorns = document.querySelectorAll('#three li')
    console.log(unicorns)
}

window.onload = select;