import MenuItem from './MenuItem';
import Vantagens from '../vantagens/index';
import Depoimentos from '../depoimentos/index';
import { IconBrandGoogle } from '@tabler/icons-react';
export default function Menu() {
    function loginGoogle() {
        console.log('Google Login')
    }
    return (
        <div className="flex gap-2">
            <MenuItem 
                url="#inicio"
                className="hidden sm:flex"
            >
                Início    
            </MenuItem>
            <MenuItem
                url="#vantagens"
                className="hidden sm:flex"
            >
                Vantagens
            </MenuItem>
            <MenuItem
                url="#depoimentos"
                className="hidden sm:flex"
            >
                Depoimentos
            </MenuItem>
            <MenuItem 
                onClick={loginGoogle}
                className="bg-gradient-to-r from-indigo-600 to-cyan-600"
            >
                <div className="flex items-center gap-2">
                    <IconBrandGoogle size={15}></IconBrandGoogle>
                    <span>Login</span>
                </div>
            </MenuItem>
        </div>
    )
}