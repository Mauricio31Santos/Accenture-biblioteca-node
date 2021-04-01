class BaseService{

    constructor(repository){
        this.repository = repository
    }

    getAll(){
        return this.repository.getAll()
    }

    getById(id){
        return this.repository.getById(id)
    }

    add(payload){
        return this.repository.add(payload)
    }

    update(id, payload){
        return this.repository.update(id, payload)
    }

    remove(id){
        return this.repository.remove(id)
    }
}

module.exports = BaseService