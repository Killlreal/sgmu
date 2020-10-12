export default {

    SET_FIELD: (state, item) => {
        state.fieldslist.push(item)
    },
    SET_ADMIN: (state, id) => {
        state.adminId = id
    },
    DEL_FIELD: (state, index) => {
        state.fieldslist.splice(index, 1)
    },
    CHANG_FIELD: (state, index) => {
        state.fieldslist[index]
    },
    CHANG_MAINTITLE: (state, title) => {
        state.mainTitle = title
    },
    CHANG_EXPIRED: (state, expired) => {
        state.expired = expired
    },
    SAV_FORM: (state) => {
        state.readyform.title = state.mainTitle;
        state.readyform.expired = state.expired;
        state.readyform.forAdmin = state.adminId;
        state.readyform.content = state.fieldslist;
        var sendForm = JSON.stringify(state.readyform);
        const postData = async(url, data) => {
            let response = await fetch(url, {
                method: 'POST',
                body: data,
            });
        }
        postData('formapi/forms/',sendForm);
        
        // state.readyform.title = state.mainTitle;
        // state.readyform.fieldslist = state.fieldslist;
        // // var sendForm = JSON.stringify(state.readyform);
        // // localStorage.setItem("form", sendForm);


        // // const postDat = async(url, data) => {
        // //     try {
        // //         let res = await fetch(url, {
        // //             method: 'POST',
        // //             body: data,
        // //             headers: {
        // //                 "Content-type": "application/json"
        // //             }
        // //         });
        // //         const json = await res.json();
        // //         console.log('Успех', JSON.stringify(json))
        // //     } catch (error) {
        // //         console.log('Ошибка', error)
        // //     }
        // // }

        // // postDat('https://jsonplaceholder.typicode.com/posts/', sendForm)

        state.sendForm = null;
        state.mainTitle = '';
        state.fieldslist = [];
        state.readyform = {};
    },
    GET_FORM_m: (state) => {
        state.allForms.item1 = (JSON.parse(localStorage.getItem('form')));
    }
}