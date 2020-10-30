const getElement = selector => document.querySelector(selector)

const links = [
    'https://www.linkedin.com/in/',
    'https://github.com/'
]

function clickListener(owner, socialNetwork, linkNumber)
{
    getElement(`div.${owner} button.${socialNetwork}`).addEventListener('click', ({target}) => {
        window.open(links[linkNumber] + target.dataset.uname, '_blank')
    })
}

function setSocialLinks(owner)
{
    clickListener(owner, 'linkedin', 0)
    clickListener(owner, 'github', 1)
}


setSocialLinks('felipe')