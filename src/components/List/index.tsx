// @flow 
import * as React from 'react';
import style from './List.module.scss';
import Item from "./Item";
import {ITarefa} from "../../types/tarefas";

interface Props {
    tarefas: ITarefa[],
    selecionaTarefa: (tarefaSelecionada: ITarefa) => void
}

const List = ({tarefas, selecionaTarefa}:Props) => {
    return (
        <aside className={style.listaTarefas}>
            <h2>Estudos do Dia</h2>
            <ul>
                {tarefas.map(item => (
                    <Item
                        selecionaTarefa={selecionaTarefa}
                        key={item.id}
                        {...item}
                    />
                ))}
            </ul>
        </aside>
    );
};
export default List;