class BaseRepository{

    getAll(){
        return { hello : 'world' }
    }

    getById(id){
        return { hello : id }
    }

    add(entity){
        return { hello : entity }
    }

    update = (id, entity) => {
        return { hello : { id, entity } }
    }

    remove = (id) => {
        return { hello : id }
    }

}

module.exports = BaseRepository