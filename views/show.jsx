const React = require('react')
const Default = require('./layouts/default')

function Show({ bread }) {
    return (
        <Default>
            <h2>Show page</h2>
            <h3>{bread.name}</h3>
            <p>
                and it { bread.hasGluten ? <span> does</span> : <span> does NOT</span>  } have gluten.
            </p>
            <img src={bread.image} alt={bread.name}/>
            <p>{bread.getBakedBy()}</p>
            <a href={`/breads/${bread._id}/edit`} >Edit</a>
            <form method='POST' action={`/breads/${bread._id}?_method=DELETE`}>
                <input type="submit" value="DELETE" />
            </form>
        </Default>
    )
}

module.exports = Show