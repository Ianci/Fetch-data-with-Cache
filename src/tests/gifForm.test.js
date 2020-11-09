const { shallow } = require("enzyme")
import  gifForm  from '../components/gifForm'
import React from 'react'

describe('Pruebas en el componente <gifForm>', () => {
    
    test('Debe mostrar el componente correctamente', () => {
        
        const wrapper = shallow(<gifForm />)
        expect ( wrapper ).toMatchSnapshot()
    })
    
})
