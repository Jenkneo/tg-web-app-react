import React from 'react';
// import Button from '../Button/Button';
import {useTelegram} from '../../hooks/useTelegram';
import imagePlaceholder from './image_placeholder.png';
import './Profile.css';

const Profile = () => {
    const {user} = useTelegram();

    return (
        <div className={'profile container'}>
            <div className={'profile__container grid'}>
                <div className={'profile__data'}>
                    <div className={'profile__border'}>
                        <div className={'profile__perfil'}>
                            <img src={imagePlaceholder} alt='Logo' />;
                        </div>
                    </div>
                    <h2 className={'profile__name'}>{user?.first_name}</h2>
                    <h3 className={'profile__profession'}>{`@${user?.username}`}</h3>
                </div>  

                <ul className={"stats__content"}>
                    <div className={"stats__info"}>
                        <span className={'profile__rating-data'}>⭐ 55</span>
                        <span className={'profile__rating-label'}>Мои оценки</span>
                    </div>

                    <div className={"stats__info"}>
                        <span className={'profile__rating-data'}>~ 7.4</span>
                        <span className={'profile__rating-label'}>Средний балл</span>
                    </div>
                </ul>

                <div className={"stats__content"}>
                    <div className={"stats__info"}>
                        <span className={'profile__rating-data'}>Monster</span>
                        <span className={'profile__rating-label'}>Любимый энергетик</span>
                    </div>

                    <div className={"stats__info"}>
                        <span className={'profile__rating-data'}>Burn</span>
                        <span className={'profile__rating-label'}>Любимая линейка</span>
                    </div>
                </div>

                <Button className={"profile__button"}>Написать отзыв</Button>
            </div>
        </div>
    );
};

export default Profile;
