import { useEffect, useState } from 'react'
import { getAllPokemonList } from './api/pokemon'

function App() {
    const [ pokemon, setPokemon ] = useState( [] )

    useEffect( () => {
        async function fetchData() {
            try {
                const res = await getAllPokemonList()
                await setPokemon( res?.results )
            } catch( e ) {
                console.log( e )
            }
        }

        fetchData()
    }, [] )

    return (
        <div className="App">
            <div style={ {
                padding: '50px 0',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexWrap: 'wrap',
                height: '330',
                width: '330',
                gap: '25px 25px',
                background: 'white'
            } }>
                { pokemon?.map( ( poke, i ) =>
                    <div key={ poke.name }
                         style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-around',  height: 250, width: 250, margin: '10, 10', borderRadius: 14, boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px'  }}
                    >
                       <div style={{padding: '5px 10px'}}>
                           <p>{poke.name}</p>
                       </div>
                        <img width="80%" height="75%"
                             style={{borderRadius: "14px", marginBottom: "25px"}}
                             src={ `https://img.pokemondb.net/artwork/large/${ poke.name }.jpg` }
                             alt={ poke.name }
                        />
                    </div>
                ) }
            </div>
        </div>
    )
}

export default App
