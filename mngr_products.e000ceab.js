const t=document.querySelector(".block.--products ");console.log(t);const o=document.querySelector(".--products .block__overflow");console.log(o);const c=document.querySelector(".table.--products .tbody");console.log(c);const e=[{sku:"v002-g0217-art1645265",name:"Сукня рожева, шовкова",brand:"Alureee",section:"Одяг",category:"Жінкам",subCategory:"Сукні",price:"2150UAH",commision:"35",stock:"15",manufacturyTime:"---",col11:"---",col12:"---",col13:"---"},{sku:"v002-g0217-art1645265",name:"Сукня рожева, шовкова",brand:"Alureee",section:"Одяг",category:"Жінкам",subCategory:"Сукні",price:"2150UAH",commision:"35",stock:"15",manufacturyTime:"---",col11:"---",col12:"---",col13:"---"},{sku:"v002-g0217-art1645265",name:"Сукня рожева, шовкова",brand:"Alureee",section:"Одяг",category:"Жінкам",subCategory:"Сукні",price:"2150UAH",commision:"35",stock:"15",manufacturyTime:"---",col11:"---",col12:"---",col13:"---"},{sku:"v002-g0217-art1645265",name:"Сукня рожева, шовкова",brand:"Alureee",section:"Одяг",category:"Жінкам",subCategory:"Сукні",price:"2150UAH",commision:"35",stock:"15",manufacturyTime:"---",col11:"---",col12:"---",col13:"---"},{sku:"v002-g0217-art1645265",name:"Сукня рожева, шовкова",brand:"Alureee",section:"Одяг",category:"Жінкам",subCategory:"Сукні",price:"2150UAH",commision:"35",stock:"15",manufacturyTime:"---",col11:"---",col12:"---",col13:"---"},{sku:"v002-g0217-art1645265",name:"Сукня рожева, шовкова",brand:"Alureee",section:"Одяг",category:"Жінкам",subCategory:"Сукні",price:"2150UAH",commision:"35",stock:"15",manufacturyTime:"---",col11:"---",col12:"---",col13:"---"},{sku:"v002-g0217-art1645265",name:"Сукня рожева, шовкова",brand:"Alureee",section:"Одяг",category:"Жінкам",subCategory:"Сукні",price:"2150UAH",commision:"35",stock:"15",manufacturyTime:"---",col11:"---",col12:"---",col13:"---"},{sku:"v002-g0217-art1645265",name:"Сукня рожева, шовкова",brand:"Alureee",section:"Одяг",category:"Жінкам",subCategory:"Сукні",price:"2150UAH",commision:"35",stock:"15",manufacturyTime:"---",col11:"---",col12:"---",col13:"---"},{sku:"v002-g0217-art1645265",name:"Сукня рожева, шовкова",brand:"Alureee",section:"Одяг",category:"Жінкам",subCategory:"Сукні",price:"2150UAH",commision:"35",stock:"15",manufacturyTime:"---",col11:"---",col12:"---",col13:"---"},{sku:"v002-g0217-art1645265",name:"Сукня рожева, шовкова",brand:"Alureee",section:"Одяг",category:"Жінкам",subCategory:"Сукні",price:"2150UAH",commision:"35",stock:"15",manufacturyTime:"---",col11:"---",col12:"---",col13:"---"}].map(((t,o,c)=>(({sku:t="---",name:o="---",brand:c="---",section:e="---",category:a="---",subCategory:s="---",price:l="---",commision:r="---",stock:n="---",manufacturyTime:i="---",col11:u="---",col12:m="---",col13:d="---",...g}={})=>`\n  <tr class="row">\n    <td class="col --1" data-tittle="sku">${t}</td>\n    <td class="col --2" data-tittle="name">${o}</td>\n    <td class="col --3" data-tittle="brand">${c}</td>\n    <td class="col --4" data-tittle="section">${e}</td>\n    <td class="col --5" data-tittle="category">${a}</td>\n    <td class="col --6" data-tittle="subCategory">${s}</td>\n    <td class="col --7" data-tittle="price">${l}</td>\n    <td class="col --8" data-tittle="commision">${r}</td>\n    <td class="col --9" data-tittle="stock">${n}</td>\n    <td class="col --10" data-tittle="manufacturyTime">${i}</td>\n    <td class="col --11" data-tittle="">${u}</td>\n    <td class="col --12" data-tittle="">${m}</td>\n    <td class="col --13" data-tittle="">${d}</td>\n  </tr>`)(t)));console.log(e),console.log(e.join("")),c.insertAdjacentHTML("afterbegin",e.join(""));
//# sourceMappingURL=mngr_products.e000ceab.js.map