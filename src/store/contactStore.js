import { v4 as uuidv4 } from 'uuid';
import { defineStore } from 'pinia';
import { useStorage } from '@vueuse/core'

export const contactStore = defineStore('contactStore', {
    state: () => {
        return {
            contacts: useStorage('contacts', []),
            contactEdit:useStorage('contactEdit', []),
        }
    },
    getters: {
        getContacts: (state) => state.contacts,
    },
    actions: {
        add(contact) {
            try {
                contact.id = uuidv4();
                this.contacts.push(contact);

                
            } catch (error) {
                throw error
            }
        },
        update(contact) {
            try {
                this.contacts[this.contacts.findIndex(contactFind => contactFind.id == contact.id)] = contact
                this.contactEdit=contact;
            } catch (error) {
                throw error
            }
        },
        delete(id){
            try {
                id = uuidv4();
                this.contacts.splice(id,1);

            } catch (error) {
                throw error
            }
        },
        cleanEdit(){
            this.contactEdit=[]
        }
    },
})