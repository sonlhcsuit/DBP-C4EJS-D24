let user_as_object = {
        name: {
            fname: 'Luu',
            sname: 'Hoang',
            name: {
                name: {
                    name: {
                        name: 'Son'
                    }
                }
            }
        }, // property
        job: 'mindx mentor',
        hobbies: ['pool', 'swim', 'code']

    }
    // value cua mot property co kieu du lieu la object
    // nested obj

let user_as_array = ['son', 'mindx mentor']
    // javascript se hieu day bien my_obj la mot object

// let my_arr = [01,'asdasd','?']
// console.log(my_arr[0],my_arr[1],my_arr[2])
// through key

// let key = 'My_key'
// console.log(my_obj[key],my_obj[81923712983])
// console.log(my_obj.key)


// // w/ Array
// for (let i = 0; i < user_as_array.length; i++) {
//     console.log(user_as_array[i])
// }

// // w/ Object
// for (let i in user_as_object) {
//     console.log(user_as_object[i])
// }

// console.log(user_as_object.hobbies[1])

users = [
    {
        username: 'sonlh',
        password: 'sonlh',
        email: {
            work: 'abc@company.com',
            private: 'abc@gmail.com'
        },
    },
    {
        username: 'quangtm',
        password: 'quangtm',
        email: {
            work: 'abcde@company.com',
            private: 'abcde@gmail.com'
        },
    },
    {
        username: 'hieulm',
        password: 'hieulm',
        email:{}
    },
    
]

for (let i =0;i<users.length;i++){
    users[i].email.private = 'haha'
}
console.log(users)