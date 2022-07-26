import React, { useEffect, useState } from 'react';
import Getinfo from '../servicios/Getinfo.jsx';
import { ContainerBtExp, ContainerExp, ContainerImg, ImgExp, TagsExp, TitleExp, GridSearch, FilterExp, SearchContainer} from '../components/styles/Styles.jsx';
import { Link } from 'react-router-dom';
import Dropdown from '../components/Dropdown.jsx';


const Desplegables=[{titulo:'Ubicación', valores:['Montaña','Ciudad','Playa']},{titulo:'Transporte', valores:['Bicicleta','A pie','Barco']},{titulo:'Duración', valores:['Excursión corta','Excursión larga']}]

export default function Search (){
    const [info, setInfo] = useState([])
    const [loading, setLoading] = useState(false)
    const [valorFiltro, setValorFiltro] = useState('')
    const [etiquetaActiva,setEtiquetaActiva] = useState('')

     useEffect(()=>{
        setLoading(true)
        Getinfo.getAll()
        .then(res =>{ 
            let datos = res
            if(etiquetaActiva){
                datos=datos.filter(dato=>{
                    if(etiquetaActiva === 'Ubicación'){
                        return dato.et_ubicacion === valorFiltro
                    }
                    if(etiquetaActiva === 'Transporte'){
                        return dato.et_transporte === valorFiltro
                    }
                    if(etiquetaActiva === 'Duración'){
                        return dato.et_duracion === valorFiltro
                    }
                    return true
                })
            }
                setInfo(datos)
                setLoading(false)
            })
    }, [valorFiltro])

   

    const HandleClick = (ev)=> {
        if(ev.target.id === 'span-Ubicación'){
            setEtiquetaActiva('Ubicación')
        }
        if(ev.target.id === 'span-Transporte'){
            setEtiquetaActiva('Transporte')
        }
        if(ev.target.id === 'span-Duración'){
            setEtiquetaActiva('Duración')
        }
      }

      const HandleChange = (ev)=> {
        setValorFiltro(ev.target.value)
      }

    if (loading) return <section>Cargando...</section>

    return(
        <SearchContainer>
            <h1> Experiencias en el área de Barcelona</h1>

            <FilterExp>
                {Desplegables.map((desplegableEtiqueta)=>(
                    <section key={desplegableEtiqueta.titulo}>
                    <Dropdown label={`${desplegableEtiqueta.titulo}`} 
                    options={desplegableEtiqueta.valores.map(valor=>({value:valor,label:valor}))} 
                    onClick={HandleClick} 
                    onChange={HandleChange}
                    style={{textDecoration:etiquetaActiva===desplegableEtiqueta.titulo?'underline #000 0.1em':'', textUnderlineOffset:etiquetaActiva===desplegableEtiqueta.titulo? '0.5em': '', color: etiquetaActiva===desplegableEtiqueta.titulo? '#0007': ''}}
                    selectStyle={{display:etiquetaActiva===desplegableEtiqueta.titulo?'block':'none', marginTop:etiquetaActiva===desplegableEtiqueta.titulo? '1em' : ''}}/>
                    </section>
                ))}
            </FilterExp> 

            <GridSearch>      
                {     
                    info.map ((singleExp, i)=> 
                        <ContainerExp key={i}>
                            <Link to={`/${i}/detail`} state={{etiquetaActiva}}> 
                                <ContainerImg>
                                    <ImgExp src={singleExp.img} alt={singleExp.titulo}/>
                                    <TitleExp className='titlexp'>{singleExp.titulo}</TitleExp>
                                </ContainerImg>
                            </Link>
                            
                            <section>
                                <ContainerBtExp>
                                    <button className={etiquetaActiva==='Ubicación'?'selectedButton':''}>{singleExp.et_ubicacion}</button>
                                    <button className={etiquetaActiva==='Transporte'?'selectedButton':''}>{singleExp.et_transporte}</button>
                                    <button className={etiquetaActiva==='Duración'?'selectedButton':''}>{singleExp.et_duracion}</button>
                                </ContainerBtExp>
                                <TagsExp>
                                    <section>
                                        <h5>{singleExp.id}</h5>
                                        <p>{singleExp.precio} por persona</p>
                                    </section>
                                    
                                    <Link to='/' className='link'>Reserva ahora</Link>      
                                </TagsExp>
                            </section>
                        </ContainerExp>
                    )
                } 
            </GridSearch>
        </SearchContainer>
    )
}