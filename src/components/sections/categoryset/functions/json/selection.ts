
type CategoryType = {
    name: string,
    description: string,
    data: string
}[]

export const categories: CategoryType = [
    { 
        name: 'appetizers', 
        description: 'Delicious appetizers to start your meal.', 
        data: 'appetizer' 
    },
    { 
        name: 'soups', 
        description: 'Warm and hearty soups.', 
        data: 'soup' 
    },
    { 
        name: 'pizza', 
        description: 'Delicious pizzas for everyone.', 
        data: 'pizza' 
    },
    { 
        name: 'desserts', 
        description: 'Sweet treats to end your meal.', 
        data: 'desserts' 
    },
    { 
        name: 'drinks', 
        description: 'Refreshing drinks for everyone.', 
        data: 'drinks' 
    },
];