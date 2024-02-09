import { Component } from "react";
import BubbleAlert from "./BubbleAlert";
import DetallesCarro from "./DetallesCarro";

const styles = {
    img: {
        backgroundColor: '#B4D4FF',
        border: 'none',
        padding: '15px',
        borderRadius: '15px',
        cursor: 'pointer',
        width: '30px'
    },

    bubble: {
        position: 'relative',
        left: 12,
        top: 5,
    }
}

class Carro extends Component {
    render() {
        const { carro, esCarroVisible, mostrarCarro } = this.props
        const cantidad = carro.reduce((acc, el) => acc + el.cantidad, 0)
        return (
            <div>
                <span style={styles.bubble}> 
                    {cantidad !== 0 
                        ? <BubbleAlert value={cantidad} /> 
                        : null
                    }
                </span>

                <img alt='Carrito de compras' src='/productos/carrito.png' onClick={mostrarCarro} style={styles.img} />

                {esCarroVisible ? <DetallesCarro carro={carro}/> : null}
            </div>
        )
    }
}

export default Carro