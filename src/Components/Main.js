import React, { Component } from 'react';
import Table from './Table';

class Main extends Component {

    constructor(props) {
        super(props);
        
        this.state = {
            category: 0,
            cart: []
        }

        /* binding this to the some functions */
        this.changeCategory = this.changeCategory.bind(this)
        this.addToCart = this.addToCart.bind(this)
        this.removeFromCart = this.removeFromCart.bind(this)
    }

    products = [
        {
            'name': 'Bücher',
            'items': [
                {
                    'Autor': 'Stephen King',
                    'Titel': 'Carrie',
                    'Jahr': 1974,
                    'Seiten': 199,
                    'Verlag': 'Doubleday'
                },
                {
                    'Autor': 'Stephen King',
                    'Titel': 'The Shining',
                    'Jahr': 1977,
                    'Seiten': 447,
                    'Verlag': 'Doubleday'
                },
                {
                    'Autor': 'Stephen King',
                    'Titel': 'Christine',
                    'Jahr': 1983,
                    'Seiten': 526,
                    'Verlag': 'Viking'
                },
                {
                    'Autor': 'Stephen King',
                    'Titel': 'It',
                    'Jahr': 1986,
                    'Seiten': 1138,
                    'Verlag': 'Viking'
                },
                {
                    'Autor': 'Stephen King',
                    'Titel': 'Misery',
                    'Jahr': 1987,
                    'Seiten': 310,
                    'Verlag': 'Viking'
                },
                {
                    'Autor': 'Stephen King',
                    'Titel': 'Joyland',
                    'Jahr': 2013,
                    'Seiten': 288,
                    'Verlag': 'Hard Case Crime'
                }
            ]
        },
        {
            'name': 'Audio-Books',
            'items': [
                {
                    'Autor': 'Stephen King',
                    'Titel': 'On Writing: A Memoir of the Craft ',
                    'Jahr': 2000,
                    'Länge': 120,
                    'Verlag': 'Simon & Schuster Audio'
                },
                {
                    'Autor': 'Stephen King',
                    'Titel': 'Salem\'s Lot (introduction)',
                    'Jahr': 2004,
                    'Länge': 180,
                    'Verlag': 'Simon & Schuster Audio'
                },
                {
                    'Autor': 'Stephen King',
                    'Titel': 'Bag of Bones',
                    'Jahr': 2005,
                    'Länge': 240,
                    'Verlag': 'Simon & Schuster Audio'
                }
            ]
        }
    ];
    

    /* loops through the different categories     */
    changeCategory() {
        this.setState({
            category : (this.state.category + 1) % this.products.length
        })
    }

    /* adds an item to the cart */
    addToCart(index) {
        let item = this.products[this.state.category].items[index]
        let newCart = [...this.state.cart]
        newCart.push({
            'Autor': item.Autor,
            'Titel': item.Titel
    })
        this.setState({
            cart : newCart
        })
        
    }

    /* removes an item from the cart array by the index*/
    removeFromCart(index) {
        let newCart = [...this.state.cart]
        newCart.splice(index,1)
        this.setState({
            cart: newCart
        })
    }


    render() {
        return (
        <main>
            <button onClick={this.changeCategory}>Produktkategorie wechseln</button>

            <h2>{this.products[this.state.category].name}</h2>
            <Table data={this.products[this.state.category].items} clickText={"In den Warenkorb>"} clickFunction={this.addToCart}/>
            

            {/* if the cart is empty it won't be displayed */}
            {this.state.cart.length ? "" : <h2>Warenkorb</h2>}
            {this.state.cart.length ? "" : <Table data={this.state.cart} clickText={"Entfernen>"} clickFunction={this.removeFromCart}/>}

        </main>
    );                

    }
}

export default Main;