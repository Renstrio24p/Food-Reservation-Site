import{a as s}from"./chunk-SKNRVDE4.js";import{d as t}from"./chunk-WEUAS4CC.js";t();var a=d=>d.map((i,r)=>`
            <div key=${r} class='collection-card' id=${r}>
                <div class='collection-image'>
                    <img src='${i.image}' alt='collection' />
                </div>
                <div class='card-details'>
                    <div class='details'>
                        <h3>${i.title}</h3>
                        <p>Flavors: ${i.flavors?i.flavors.join(", "):""}</p>
                    </div>
                    <input type='button' id='button-${r}' class='add-btn' value='Add To Cart' data-id='${i._id}'>
                </div>
            </div>
        `).join(""),e=(d,i,r)=>`
        <div class='hero-category-section ${d}'>
            <div>
                <h1>${s(d)}</h1>
                <p>${i}</p>
            </div>
        </div>
        <div class='category-section ${d}'>
            <h2>${s(d)}</h2>
            <div class='category-menu'>
                ${a(r)}
            </div>
        </div>
    `;export{e as a};
