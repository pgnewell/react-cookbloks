export const data = [
    {
        "name": "my neat recipe",
        "steps": [
            {
                "type": 0,
                "name": "step 1",
                "step": 1,
                "instructions": "combine",
                "step_ingredients": [
                    {
                        "seq": 1,
                        "measurement": "count",
                        "amount": "8",
                        "recipe": 35,
                        "ingredient": "Apples",
                        "step": 1
                    },
                    {
                        "seq": 2,
                        "measurement": "cups",
                        "amount": "1/2",
                        "recipe": 35,
                        "ingredient": "Sugar",
                        "step": 1
                    },
                    {
                        "measurement": "teaspoons",
                        "seq": 3,
                        "recipe": 35,
                        "amount": "1/2",
                        "step": 1,
                        "ingredient": "Coriander"
                    }
                ],
                "recipe": 35,
                "dependent_steps_recipe_step": null
            },
            {
                "type": 0,
                "name": "step 2",
                "step": 2,
                "instructions": "combine",
                "dependent_steps_recipe_step": null,
                "recipe": 35,
                "step_ingredients": [
                    {
                        "step": 2,
                        "ingredient": "flour",
                        "measurement": "pounds",
                        "seq": 1,
                        "recipe": 35,
                        "amount": "1/2"
                    },
                    {
                        "step": 2,
                        "ingredient": "salt",
                        "measurement": "teaspoons",
                        "seq": 2,
                        "recipe": 35,
                        "amount": "1/2"
                    }
                ]
            },
            {
                "instructions": "cut into flour mixture",
                "recipe": 35,
                "step_ingredients": [
                    {
                        "seq": 1,
                        "measurement": "ounces",
                        "amount": "6",
                        "recipe": 35,
                        "ingredient": "butter",
                        "step": 3
                    }
                ],
                "dependent_steps_recipe_step": null,
                "type": 0,
                "name": "step 3",
                "step": 3
            }
        ],
        "description": "A really neat recipe",
        "author": "Gordon Ramsay",
        "id": 35,
        "picture_url": "/images/0/2011-04-19%2013.47.35.png"
    },
    {
        "description": "Banana Bread as a muffin",
        "author": "Gordon Ramsay",
        "id": 46,
        "picture_url": "/images/0/brioches.png",
        "steps": [
            {
                "step": 1,
                "type": 0,
                "name": "step 1",
                "recipe": 46,
                "step_ingredients": [
                    {
                        "ingredient": "flour",
                        "step": 1,
                        "amount": "8",
                        "recipe": 46,
                        "seq": 2,
                        "measurement": "oz"
                    },
                    {
                        "ingredient": "baking soda",
                        "step": 1,
                        "seq": 3,
                        "measurement": "t",
                        "amount": "1",
                        "recipe": 46
                    },
                    {
                        "amount": "1/2",
                        "recipe": 46,
                        "seq": 4,
                        "measurement": "t",
                        "ingredient": "salt",
                        "step": 1
                    },
                    {
                        "step": 1,
                        "ingredient": "nutmeg",
                        "measurement": "",
                        "seq": 5,
                        "recipe": 46,
                        "amount": "1/2"
                    }
                ],
                "dependent_steps_recipe_step": null,
                "instructions": "do something"
            },
            {
                "name": "step 2",
                "type": 0,
                "step": 2,
                "instructions": "do something else",
                "recipe": 46,
                "dependent_steps_recipe_step": null,
                "step_ingredients": [
                    {
                        "amount": "4",
                        "recipe": 46,
                        "seq": 1,
                        "measurement": "oz",
                        "ingredient": "butter",
                        "step": 2
                    },
                    {
                        "ingredient": "sugar",
                        "step": 2,
                        "seq": 2,
                        "measurement": "cups",
                        "amount": "1/2",
                        "recipe": 46
                    }
                ]
            }
        ],
        "name": "Banana Muffins"
    },
    {
        "name": "Banana Muffins",
        "steps": [
            {
                "step": 1,
                "type": 0,
                "name": "step 1",
                "recipe": 47,
                "dependent_steps_recipe_step": null,
                "step_ingredients": [
                    {
                        "seq": 2,
                        "measurement": "oz",
                        "amount": "8",
                        "recipe": 47,
                        "ingredient": "flour",
                        "step": 1
                    },
                    {
                        "seq": 3,
                        "measurement": "t",
                        "amount": "1",
                        "recipe": 47,
                        "ingredient": "baking soda",
                        "step": 1
                    },
                    {
                        "step": 1,
                        "ingredient": "salt",
                        "measurement": "t",
                        "seq": 4,
                        "recipe": 47,
                        "amount": "1/2"
                    },
                    {
                        "ingredient": "nutmeg",
                        "step": 1,
                        "seq": 5,
                        "measurement": "",
                        "amount": "1/2",
                        "recipe": 47
                    }
                ],
                "instructions": "do something"
            },
            {
                "name": "step 2",
                "type": 0,
                "step": 2,
                "instructions": "do something else",
                "recipe": 47,
                "dependent_steps_recipe_step": null,
                "step_ingredients": [
                    {
                        "step": 2,
                        "ingredient": "butter",
                        "measurement": "oz",
                        "seq": 1,
                        "recipe": 47,
                        "amount": "4"
                    },
                    {
                        "ingredient": "sugar",
                        "step": 2,
                        "seq": 2,
                        "measurement": "cups",
                        "amount": "1/2",
                        "recipe": 47
                    }
                ]
            }
        ],
        "description": "Banana Bread as a muffin",
        "id": 47,
        "author": "Gordon Ramsay",
        "picture_url": "/images/0/brioches.png"
    },
    {
        "steps": [
            {
                "instructions": "heat sugar in a saucepan ",
                "recipe": 48,
                "dependent_steps_recipe_step": null,
                "step_ingredients": [
                    {
                        "step": 1,
                        "ingredient": "sugar",
                        "measurement": "oz",
                        "seq": 1,
                        "recipe": 48,
                        "amount": "8"
                    },
                    {
                        "seq": 2,
                        "measurement": "oz",
                        "amount": "6",
                        "recipe": 48,
                        "ingredient": "cream",
                        "step": 1
                    }
                ],
                "name": "Caramel Extract",
                "type": 0,
                "step": 1
            },
            {
                "step": 2,
                "type": 0,
                "name": "Caramel Filling",
                "dependent_steps_recipe_step": null,
                "recipe": 48,
                "step_ingredients": [
                    {
                        "ingredient": "Caramel Extract",
                        "step": 2,
                        "seq": 1,
                        "measurement": "oz",
                        "amount": "10",
                        "recipe": 48
                    },
                    {
                        "step": 2,
                        "ingredient": "butter",
                        "recipe": 48,
                        "amount": "4",
                        "measurement": "oz",
                        "seq": 3
                    }
                ],
                "instructions": "cut butter into cubes and mix with extract until you have a creamy filling"
            }
        ],
        "name": "Salted Caramel Macarons",
        "author": "Gordon Ramsay",
        "picture_url": "/images/0/brioches.png",
        "id": 48,
        "description": "A Froufrou cookie"
    },
    {
        "description": "A Froufrou cookie",
        "author": "Gordon Ramsay",
        "picture_url": "/images/0/brioches.png",
        "id": 49,
        "name": "Salted Caramel Macarons",
        "steps": [
            {
                "step": 1,
                "name": "Italian Meringue",
                "type": 0,
                "recipe": 49,
                "dependent_steps_recipe_step": null,
                "step_ingredients": [
                    {
                        "step": 1,
                        "ingredient": "egg whites",
                        "measurement": "grams",
                        "seq": 4,
                        "recipe": 49,
                        "amount": "120"
                    },
                    {
                        "step": 1,
                        "ingredient": "sugar",
                        "measurement": "grams",
                        "seq": 5,
                        "recipe": 49,
                        "amount": "300"
                    },
                    {
                        "ingredient": "water",
                        "step": 1,
                        "seq": 6,
                        "measurement": "grams",
                        "amount": "75",
                        "recipe": 49
                    }
                ],
                "instructions": "bring water and sugar to a boil in a saucepan. Bring to a temperature of 115C and begin whipping egg whites at high speed. When the whites have reached soft peak stage the sugar should be at 118-121C. Lower the speed of the mixer to medium and pour the sugar slowly into the egg whites."
            },
            {
                "step_ingredients": [
                    {
                        "measurement": "grams",
                        "seq": 1,
                        "recipe": 49,
                        "amount": "350",
                        "step": 2,
                        "ingredient": "sugar"
                    },
                    {
                        "recipe": 49,
                        "amount": "250",
                        "measurement": "grams",
                        "seq": 2,
                        "step": 2,
                        "ingredient": "cream"
                    }
                ],
                "dependent_steps_recipe_step": null,
                "recipe": 49,
                "instructions": "Bring cream to a boil and place aside. Place sugar in a saucepan and bring to 330F heating evenly til it gets a dark brown colour. Add the hot cream and mix until smooth.",
                "step": 2,
                "name": "Caramel Extract",
                "type": 0
            },
            {
                "step": 3,
                "type": 0,
                "name": "Caramel Filling",
                "dependent_steps_recipe_step": null,
                "recipe": 49,
                "step_ingredients": [
                    {
                        "ingredient": "Caramel Extract",
                        "step": 3,
                        "amount": "600",
                        "recipe": 49,
                        "seq": 1,
                        "measurement": "grams"
                    },
                    {
                        "recipe": 49,
                        "amount": "350",
                        "measurement": "grams",
                        "seq": 2,
                        "step": 3,
                        "ingredient": "butter"
                    },
                    {
                        "ingredient": "fleur de sel",
                        "step": 3,
                        "amount": "10",
                        "recipe": 49,
                        "seq": 3,
                        "measurement": "grams"
                    }
                ],
                "instructions": "Soften butter an cut into 1 inch cubes.\r\nBring Extract to 60C and whisk in butter until smooth and shiny."
            },
            {
                "instructions": "Combine in a food processor and sift.",
                "step_ingredients": [
                    {
                        "measurement": "grams",
                        "seq": 1,
                        "recipe": 49,
                        "amount": "300",
                        "step": 4,
                        "ingredient": "powdered sugar"
                    },
                    {
                        "ingredient": "almond flour",
                        "step": 4,
                        "seq": 2,
                        "measurement": "grams",
                        "amount": "300",
                        "recipe": 49
                    }
                ],
                "dependent_steps_recipe_step": null,
                "recipe": 49,
                "name": "TPT",
                "type": 0,
                "step": 4
            },
            {
                "type": 0,
                "name": "Macaronage",
                "step": 5,
                "instructions": "Mix into a paste",
                "recipe": 49,
                "dependent_steps_recipe_step": null,
                "step_ingredients": [
                    {
                        "seq": 1,
                        "measurement": "grams",
                        "amount": "600",
                        "recipe": 49,
                        "ingredient": "TPT",
                        "step": 5
                    },
                    {
                        "step": 5,
                        "ingredient": "egg whites",
                        "measurement": "grams",
                        "seq": 2,
                        "recipe": 49,
                        "amount": "120"
                    }
                ]
            },
            {
                "type": 0,
                "name": "Macaron shells",
                "step": 6,
                "instructions": "Fold meringue into macaronage. Do this by mixing 1/3 of the meringue into the paste to make it workable. Then fold in the rest gently. Pipe into 2cm circles on a baking sheet and allow to dry for 15-30 minutes. Then bake at 350 degrees for 20-25 minutes.",
                "recipe": 49,
                "step_ingredients": [
                    {
                        "step": 6,
                        "ingredient": "macaronage",
                        "recipe": 49,
                        "amount": "720",
                        "measurement": "grams",
                        "seq": 1
                    },
                    {
                        "ingredient": "Italian meringue",
                        "step": 6,
                        "seq": 2,
                        "measurement": "grams",
                        "amount": "495",
                        "recipe": 49
                    }
                ],
                "dependent_steps_recipe_step": null
            }
        ]
    },
    {
        "name": "Apple Pie",
        "steps": [
            {
                "step_ingredients": [
                    {
                        "measurement": "oz",
                        "seq": 1,
                        "recipe": 50,
                        "amount": "8",
                        "step": 1,
                        "ingredient": "flour"
                    },
                    {
                        "ingredient": "butter",
                        "step": 1,
                        "seq": 2,
                        "measurement": "oz",
                        "amount": "6",
                        "recipe": 50
                    },
                    {
                        "amount": "1/2",
                        "recipe": 50,
                        "seq": 3,
                        "measurement": "t",
                        "ingredient": "salt",
                        "step": 1
                    },
                    {
                        "ingredient": "water",
                        "step": 1,
                        "amount": "2",
                        "recipe": 50,
                        "seq": 4,
                        "measurement": "oz"
                    }
                ],
                "dependent_steps_recipe_step": null,
                "recipe": 50,
                "instructions": "mix it all together",
                "step": 1,
                "name": "crust",
                "type": 0
            }
        ],
        "description": "As american",
        "picture_url": "/images/0/brioches.png",
        "author": "Gordon Ramsay",
        "id": 50
    },
    {
        "steps": [
            {
                "instructions": "mix it all together",
                "step_ingredients": [
                    {
                        "measurement": "oz",
                        "seq": 1,
                        "recipe": 51,
                        "amount": "8",
                        "step": 1,
                        "ingredient": "flour"
                    },
                    {
                        "step": 1,
                        "ingredient": "butter",
                        "measurement": "oz",
                        "seq": 2,
                        "recipe": 51,
                        "amount": "6"
                    },
                    {
                        "recipe": 51,
                        "amount": "1/2",
                        "measurement": "t",
                        "seq": 3,
                        "step": 1,
                        "ingredient": "salt"
                    },
                    {
                        "amount": "2",
                        "recipe": 51,
                        "seq": 4,
                        "measurement": "oz",
                        "ingredient": "water",
                        "step": 1
                    }
                ],
                "recipe": 51,
                "dependent_steps_recipe_step": null,
                "type": 0,
                "name": "crust",
                "step": 1
            }
        ],
        "name": "Apple Pie",
        "description": "As american",
        "picture_url": "/images/0/brioches.png",
        "id": 51,
        "author": "Gordon Ramsay"
    },
    {
        "description": "here it is",
        "id": 123,
        "picture_url": "/images/0/brioches.png",
        "author": "Gordon Ramsay",
        "steps": [
            {
                "instructions": "\t\tEnter instructions here\r\n\t",
                "recipe": 123,
                "dependent_steps_recipe_step": null,
                "step_ingredients": [
                    {
                        "step": 1,
                        "ingredient": "flour",
                        "measurement": "oz",
                        "seq": 1,
                        "recipe": 123,
                        "amount": "9"
                    }
                ],
                "name": "step 1",
                "type": 0,
                "step": 1
            }
        ],
        "name": "some recipe"
    },
    {
        "id": 124,
        "author": "Gordon Ramsay",
        "picture_url": "/images/3/coffee%20macarons.jpg",
        "description": "little boogers!",
        "name": "Salted Caramel Macarons",
        "steps": [
            {
                "step": 1,
                "type": 0,
                "name": "Batter",
                "dependent_steps_recipe_step": null,
                "recipe": 124,
                "step_ingredients": [
                    {
                        "recipe": 124,
                        "amount": "150",
                        "measurement": "grams",
                        "seq": 7,
                        "step": 1,
                        "ingredient": "almond flour"
                    },
                    {
                        "ingredient": "confectioner's sugar",
                        "step": 1,
                        "seq": 8,
                        "measurement": "grams",
                        "amount": "150",
                        "recipe": 124
                    }
                ],
                "instructions": "combine almond flour and sugar in a food processor and process until very fine. Strain through a sieve and mix lightly with egg whites."
            },
            {
                "dependent_steps_recipe_step": {
                    "recipe": 124,
                    "depended_upon": 1,
                    "step": 2
                },
                "step_ingredients": [
                    {
                        "measurement": "grams",
                        "seq": 1,
                        "recipe": 124,
                        "amount": "60",
                        "step": 2,
                        "ingredient": "egg whites"
                    },
                    {
                        "seq": 2,
                        "measurement": "grams",
                        "amount": "150",
                        "recipe": 124,
                        "ingredient": "sugar",
                        "step": 2
                    },
                    {
                        "ingredient": "water",
                        "step": 2,
                        "seq": 3,
                        "measurement": "grams",
                        "amount": "40",
                        "recipe": 124
                    }
                ],
                "recipe": 124,
                "instructions": "Place the egg whites in a mixer with a whisk attachment. Combine sugar and water place over medium heat. You will bring this to a temperature of 118 degrees celsius. When the the temp mixture reaches about 113C set the egg whites on high. The egg whites will be expected to have just arrived at the opaque white stage when the sugar temperature reaches 118C. Lower the speed to medium if it gets there too early. Remove the sugar from the heat if it is the winner but not for too long. ",
                "step": 2,
                "type": 0,
                "name": "Italian meringue"
            },
            {
                "name": "Macaronage",
                "type": 0,
                "step": 3,
                "instructions": "Mix 1/3rd of the meringue into the batter. This should lighten the batter to be more maneuverable. Add the rest of the meringue and fold it lightly with large 1/3rd of an arc strokes around the bowl ending with and upward stroke through the middle.\r\nWhen you stop will determine how smooth, spread out and high your macaroons will be. The longer, the lower, smoother and spread out they will be. Less will mean puffier, rougher.",
                "dependent_steps_recipe_step": {
                    "step": 3,
                    "depended_upon": 2,
                    "recipe": 124
                },
                "recipe": 124,
                "step_ingredients": []
            },
            {
                "name": "Piping",
                "type": 0,
                "step": 4,
                "instructions": "Line a sheet pan with parchment.\r\nPlace the mixture in a pastry bag keeping the edges clean. You can plug the tip by folding the bag into it before filling the bag. this will keep the batter from dripping out, which will definitely happen if you went for \"smooth\". The pastry tip should be a plain edge with a 1cm spout. You want the cookie to be at about 3 to 4cm (1-1.5in) wide. Allow the piped batter to dry 15-120 minutes depending on the humidity and dryness of the batter. It will no longer be sticky to touch when ready. ",
                "dependent_steps_recipe_step": {
                    "recipe": 124,
                    "depended_upon": 3,
                    "step": 4
                },
                "step_ingredients": [],
                "recipe": 124
            },
            {
                "step": 5,
                "name": "Baking",
                "type": 0,
                "step_ingredients": [],
                "dependent_steps_recipe_step": {
                    "step": 5,
                    "depended_upon": 4,
                    "recipe": 124
                },
                "recipe": 124,
                "instructions": "Bake at 300F for 15-20 minutes. It is done when the shells are hard and don't move on their base (which hopefully are pieds). Baking thoroughly will colour the macaroons in a bad way.\r\nCool before removing from the parchment."
            }
        ]
    },
    {
        "name": "lime-mango entremet",
        "steps": [
            {
                "type": 0,
                "name": "Lime Jam",
                "step": 1,
                "instructions": "1. Place all ingredients in a small saucepan and cook over low heat, stir to prevent burning. Allow to boil and cook for 1 minute. Take off heat and allow to cool.",
                "dependent_steps_recipe_step": null,
                "recipe": 53,
                "step_ingredients": [
                    {
                        "seq": 2,
                        "measurement": "count",
                        "amount": "10",
                        "recipe": 53,
                        "ingredient": "limes",
                        "step": 1
                    },
                    {
                        "measurement": "grams",
                        "seq": 3,
                        "recipe": 53,
                        "amount": "200",
                        "step": 1,
                        "ingredient": "water"
                    },
                    {
                        "amount": "100",
                        "recipe": 53,
                        "seq": 5,
                        "measurement": "grams",
                        "ingredient": "sugar",
                        "step": 1
                    },
                    {
                        "ingredient": "salt",
                        "step": 1,
                        "seq": 6,
                        "measurement": "grams",
                        "amount": "1",
                        "recipe": 53
                    },
                    {
                        "ingredient": "vanilla bean",
                        "step": 1,
                        "seq": 7,
                        "measurement": "count",
                        "amount": "1/2",
                        "recipe": 53
                    },
                    {
                        "step": 1,
                        "ingredient": "apple pectin",
                        "measurement": "grams",
                        "seq": 8,
                        "recipe": 53,
                        "amount": "8"
                    }
                ]
            },
            {
                "instructions": "1. In a small saucepan, place mango puree, inverted sugar, and vanilla beans. Cook over low-medium heat. Temper in yolks, cook over low heat to make anglaise. Cook to 85 degrees Celsius. Take off heat, add gelatin. Remove vanilla beans.\r\n2. Burmix to smooth. Chill to 40 degrees Celsius. Fold in soft cream. Pour mixture into insert fleximolds. Freeze in blast.",
                "step_ingredients": [
                    {
                        "step": 2,
                        "ingredient": "mango puree",
                        "measurement": "grams",
                        "seq": 1,
                        "recipe": 53,
                        "amount": "100"
                    },
                    {
                        "amount": "75",
                        "recipe": 53,
                        "seq": 4,
                        "measurement": "grams",
                        "ingredient": "inverted sugar",
                        "step": 2
                    },
                    {
                        "ingredient": "vanilla beans",
                        "step": 2,
                        "seq": 5,
                        "measurement": "count",
                        "amount": "4",
                        "recipe": 53
                    },
                    {
                        "measurement": "grams",
                        "seq": 6,
                        "recipe": 53,
                        "amount": "100",
                        "step": 2,
                        "ingredient": "egg yolks"
                    },
                    {
                        "measurement": "grams",
                        "seq": 7,
                        "recipe": 53,
                        "amount": "6 ",
                        "step": 2,
                        "ingredient": "gelatin"
                    },
                    {
                        "step": 2,
                        "ingredient": "heavy cream",
                        "recipe": 53,
                        "amount": "300",
                        "measurement": "grams",
                        "seq": 8
                    }
                ],
                "dependent_steps_recipe_step": null,
                "recipe": 53,
                "type": 0,
                "name": "Mango Vanilla Cream",
                "step": 2
            },
            {
                "instructions": "1. In a small saucepan, place scraped vanilla beans and cream. Bring to scald. Reserve and keep warm.\r\n2. In a medium saucepan, make a dry caramel by adding 1 tablespoon of sugar at a time to the hot pot to caramelize. Bring to dark caramel. Break caramel by adding warm cream to caramel. Cook over low heat to dissolve caramel. Temper in egg yolks. Cook over low heat to make anglaise. Cook to 85 degrees Celsius.",
                "recipe": 53,
                "dependent_steps_recipe_step": null,
                "step_ingredients": [
                    {
                        "step": 3,
                        "ingredient": " vanilla beans",
                        "recipe": 53,
                        "amount": "3",
                        "measurement": "",
                        "seq": 3
                    },
                    {
                        "step": 3,
                        "ingredient": "heavy cream",
                        "measurement": "grams",
                        "seq": 4,
                        "recipe": 53,
                        "amount": "450"
                    },
                    {
                        "seq": 5,
                        "measurement": "grams",
                        "amount": "450",
                        "recipe": 53,
                        "ingredient": "grams sugar",
                        "step": 3
                    },
                    {
                        "amount": "100",
                        "recipe": 53,
                        "seq": 6,
                        "measurement": "grams",
                        "ingredient": "egg yolk",
                        "step": 3
                    },
                    {
                        "amount": "6",
                        "recipe": 53,
                        "seq": 7,
                        "measurement": "grams",
                        "ingredient": "gelatin",
                        "step": 3
                    },
                    {
                        "ingredient": "Sel Gris",
                        "step": 3,
                        "seq": 8,
                        "measurement": "grams",
                        "amount": "1.25",
                        "recipe": 53
                    }
                ],
                "type": 0,
                "name": "Caramel Cremeux",
                "step": 3
            },
            {
                "step": 4,
                "type": 0,
                "name": "Chocolate Mousse",
                "dependent_steps_recipe_step": null,
                "recipe": 53,
                "step_ingredients": [
                    {
                        "ingredient": "sugar",
                        "step": 4,
                        "amount": "115",
                        "recipe": 53,
                        "seq": 1,
                        "measurement": "grams"
                    },
                    {
                        "seq": 2,
                        "measurement": "grams",
                        "amount": "368",
                        "recipe": 53,
                        "ingredient": "heavy cream, scalding",
                        "step": 4
                    },
                    {
                        "ingredient": "heavy cream,soft whip",
                        "step": 4,
                        "amount": "800",
                        "recipe": 53,
                        "seq": 3,
                        "measurement": "grams"
                    },
                    {
                        "recipe": 53,
                        "amount": "80",
                        "measurement": "grams",
                        "seq": 5,
                        "step": 4,
                        "ingredient": "egg yolk"
                    },
                    {
                        "seq": 6,
                        "measurement": " grams",
                        "amount": "256",
                        "recipe": 53,
                        "ingredient": "Manjari chocolate",
                        "step": 4
                    },
                    {
                        "amount": "8",
                        "recipe": 53,
                        "seq": 7,
                        "measurement": "grams",
                        "ingredient": "gelatin,bloomed",
                        "step": 4
                    }
                ],
                "instructions": "1. In a small pot, keep heavy cream warm. In a medium pot.\r\n2. Make a dry caramel with the sugar. Once caramel is dark, break with hot cream. Temper in yolks to make anglaise. Cook to 85 degrees Celsius. Pour over chocolate and gelatin. Burmix to smooth. Cool chocolate mixture to 40 degrees Celsius. Fold in soft cream. Place in piping bag for assembly."
            },
            {
                "step": 5,
                "name": "Caramel Glaze:",
                "type": 0,
                "dependent_steps_recipe_step": null,
                "recipe": 53,
                "step_ingredients": [
                    {
                        "step": 5,
                        "ingredient": "sugar",
                        "measurement": "grams",
                        "seq": 1,
                        "recipe": 53,
                        "amount": "500"
                    },
                    {
                        "ingredient": "cream",
                        "step": 5,
                        "amount": "450",
                        "recipe": 53,
                        "seq": 2,
                        "measurement": "grams"
                    },
                    {
                        "ingredient": "water",
                        "step": 5,
                        "amount": "450",
                        "recipe": 53,
                        "seq": 3,
                        "measurement": "grams"
                    },
                    {
                        "amount": "20",
                        "recipe": 53,
                        "seq": 4,
                        "measurement": "grams",
                        "ingredient": "cornstarch",
                        "step": 5
                    },
                    {
                        "amount": "22",
                        "recipe": 53,
                        "seq": 5,
                        "measurement": "grams",
                        "ingredient": "gelatin/ bloomed",
                        "step": 5
                    }
                ],
                "instructions": "1. In a small pot, bring cream to scald and reserve warm.\r\n2. In a medium pot make a dry caramel with the sugar. Once caramel is dark, break with hot cream. Cook on low heat to dissolve caramel.\r\n3. Mix water and cornstarch to create slurry. Add to caramel. Bring mixture to a boil. Allow to boil for 30 seconds. Remove from heat. Add bloomed gelatin. Burmix to smooth. Ice bath to chill glaze to 60 degrees Fahrenheit. Reserve to glaze entremet."
            },
            {
                "step": 6,
                "name": "Almond Sponge",
                "type": 0,
                "step_ingredients": [
                    {
                        "step": 6,
                        "ingredient": "almond flour",
                        "recipe": 53,
                        "amount": "100",
                        "measurement": "grams",
                        "seq": 1
                    },
                    {
                        "step": 6,
                        "ingredient": "powdered sugar",
                        "measurement": "grams",
                        "seq": 2,
                        "recipe": 53,
                        "amount": "85"
                    },
                    {
                        "step": 6,
                        "ingredient": "cake flour",
                        "recipe": 53,
                        "amount": "50",
                        "measurement": "grams",
                        "seq": 3
                    },
                    {
                        "seq": 4,
                        "measurement": "grams",
                        "amount": "60",
                        "recipe": 53,
                        "ingredient": "egg whites",
                        "step": 6
                    },
                    {
                        "step": 6,
                        "ingredient": "egg whites",
                        "measurement": "grams",
                        "seq": 12,
                        "recipe": 53,
                        "amount": "160"
                    },
                    {
                        "seq": 13,
                        "measurement": "grams",
                        "amount": "20",
                        "recipe": 53,
                        "ingredient": "heavy cream",
                        "step": 6
                    },
                    {
                        "recipe": 53,
                        "amount": "100",
                        "measurement": "grams",
                        "seq": 14,
                        "step": 6,
                        "ingredient": "sugar"
                    },
                    {
                        "measurement": "grams",
                        "seq": 15,
                        "recipe": 53,
                        "amount": "4",
                        "step": 6,
                        "ingredient": "Fleur de sel"
                    }
                ],
                "dependent_steps_recipe_step": null,
                "recipe": 53,
                "instructions": "1. In a Robot Coupe, combine almond flour, powdered sugar, cake flour, 60 grams of egg whites, and heavy cream. Robot to make a paste.\r\n2. In a kitchen aide mixer, with the whip attachment, mix 160 grams of egg whites on medium. Slowly add the sugar to make a medium peak meringue. Fold meringue into paste. Spread onto a silpat lined sheet tray and bake in a pre heated 375 degree Fahrenheit oven for 8-10 minutes or until evenly browned. Allow to cool. Then cut 2-7 inch circles and spread one side with lime jam and sprinkle with Fleur de sel."
            },
            {
                "recipe": 53,
                "dependent_steps_recipe_step": null,
                "step_ingredients": [
                    {
                        "step": 8,
                        "ingredient": "manjari Chocolate",
                        "measurement": "",
                        "seq": 1,
                        "recipe": 53,
                        "amount": ""
                    }
                ],
                "instructions": "1. Build upside down. Place acetate on a flat sheet tray. Place 8-inch stainless steal ring on sheet tray. Pipe chocolate mousse all over bottom first. Use a spatula to spread it evenly and up the sides of the ring. Next press frozen insert of mango cream and caramel cremeux into mousse. Press an almond sponge circle jam side down onto frozen insert. Top with more chocolate mousse and spread mousse to cover evenly. Then repeat with another frozen insert of mango cream and caramel cremeux into mousse and press an almond sponge circle jam side down onto frozen insert again. Top with more chocolate mousse to cover. Then top with almond petite beurre. Freeze entremet in blast freezer. Once totally frozen. Torch outer part of the ring and remove ring from entremet. Glaze entremet immediately with caramel glaze. Garnish sides of entremet with tempered manjari plaques.",
                "step": 8,
                "type": 0,
                "name": "Assembly"
            },
            {
                "dependent_steps_recipe_step": null,
                "recipe": 53,
                "step_ingredients": [
                    {
                        "ingredient": "pastry flour",
                        "step": 7,
                        "amount": "200",
                        "recipe": 53,
                        "seq": 1,
                        "measurement": "grams"
                    },
                    {
                        "ingredient": "powdered sugar",
                        "step": 7,
                        "seq": 2,
                        "measurement": "grams",
                        "amount": "100",
                        "recipe": 53
                    },
                    {
                        "step": 7,
                        "ingredient": "almonds",
                        "measurement": "grams",
                        "seq": 3,
                        "recipe": 53,
                        "amount": "150"
                    },
                    {
                        "ingredient": "butter",
                        "step": 7,
                        "amount": "135",
                        "recipe": 53,
                        "seq": 4,
                        "measurement": "grams"
                    },
                    {
                        "seq": 5,
                        "measurement": "grams",
                        "amount": "3",
                        "recipe": 53,
                        "ingredient": "sea salt",
                        "step": 7
                    }
                ],
                "instructions": "1. Place all ingredients in Robot Coupe. Blend to form dough. Press into 7 3/4- inch ring. Remove ring. \r\n2. Bake in preheated 325 degree Fahrenheit oven for 15-18 minutes or until evenly golden brown.",
                "step": 7,
                "name": "Almond Petite Beurre",
                "type": 0
            }
        ],
        "id": 53,
        "picture_url": "/images/3/lime-mango-entremet.jpg",
        "author": "Gordon Ramsay",
        "description": "A very complicated cake"
    },
    {
        "description": "A very complicated cake",
        "id": 54,
        "picture_url": "/images/0/brioches.png",
        "author": "Gordon Ramsay",
        "steps": [
            {
                "type": 0,
                "name": "Assembly",
                "step": 8,
                "instructions": "1. Build upside down. Place acetate on a flat sheet tray. Place 8-inch stainless steal ring on sheet tray. Pipe chocolate mousse all over bottom first. Use a spatula to spread it evenly and up the sides of the ring. Next press frozen insert of mango cream and caramel cremeux into mousse. Press an almond sponge circle jam side down onto frozen insert. Top with more chocolate mousse and spread mousse to cover evenly. Then repeat with another frozen insert of mango cream and caramel cremeux into mousse and press an almond sponge circle jam side down onto frozen insert again. Top with more chocolate mousse to cover. Then top with almond petite beurre. Freeze entremet in blast freezer. Once totally frozen. Torch outer part of the ring and remove ring from entremet. Glaze entremet immediately with caramel glaze. Garnish sides of entremet with tempered manjari plaques.",
                "dependent_steps_recipe_step": null,
                "step_ingredients": [],
                "recipe": 54
            },
            {
                "type": 0,
                "name": "Almond Sponge",
                "step": 6,
                "instructions": "1. In a Robot Coupe, combine almond flour, powdered sugar, cake flour, 60 grams of egg whites, and heavy cream. Robot to make a paste.\r\n2. In a kitchen aide mixer, with the whip attachment, mix 160 grams of egg whites on medium. Slowly add the sugar to make a medium peak meringue. Fold meringue into paste. Spread onto a silpat lined sheet tray and bake in a pre heated 375 degree Fahrenheit oven for 8-10 minutes or until evenly browned. Allow to cool. Then cut 2-7 inch circles and spread one side with lime jam and sprinkle with Fleur de sel.",
                "recipe": 54,
                "step_ingredients": [],
                "dependent_steps_recipe_step": null
            },
            {
                "type": 0,
                "name": "Chocolate Mousse",
                "step": 4,
                "instructions": "1. In a small pot, keep heavy cream warm. In a medium pot.\r\n2. Make a dry caramel with the sugar. Once caramel is dark, break with hot cream. Temper in yolks to make anglaise. Cook to 85 degrees Celsius. Pour over chocolate and gelatin. Burmix to smooth. Cool chocolate mixture to 40 degrees Celsius. Fold in soft cream. Place in piping bag for assembly.",
                "recipe": 54,
                "step_ingredients": [],
                "dependent_steps_recipe_step": null
            },
            {
                "step": 1,
                "type": 0,
                "name": "Lime Jam",
                "dependent_steps_recipe_step": null,
                "step_ingredients": [],
                "recipe": 54,
                "instructions": "1. Place all ingredients in a small saucepan and cook over low heat, stir to prevent burning. Allow to boil and cook for 1 minute. Take off heat and allow to cool."
            },
            {
                "step": 3,
                "name": "Caramel Cremeux",
                "type": 0,
                "dependent_steps_recipe_step": null,
                "step_ingredients": [],
                "recipe": 54,
                "instructions": "1. In a small saucepan, place scraped vanilla beans and cream. Bring to scald. Reserve and keep warm.\r\n2. In a medium saucepan, make a dry caramel by adding 1 tablespoon of sugar at a time to the hot pot to caramelize. Bring to dark caramel. Break caramel by adding warm cream to caramel. Cook over low heat to dissolve caramel. Temper in egg yolks. Cook over low heat to make anglaise. Cook to 85 degrees Celsius."
            },
            {
                "instructions": "1. Place all ingredients in Robot Coupe. Blend to form dough. Press into 7 3/4- inch ring. Remove ring. Bake in preheated 325 degree Fahrenheit oven for 15-18 minutes or until evenly golden brown.",
                "dependent_steps_recipe_step": null,
                "recipe": 54,
                "step_ingredients": [],
                "name": "Almond Petite Beurre",
                "type": 0,
                "step": 7
            },
            {
                "name": "Mango Vanilla Cream",
                "type": 0,
                "step": 2,
                "instructions": "1. In a small saucepan, place mango puree, inverted sugar, and vanilla beans. Cook over low-medium heat. Temper in yolks, cook over low heat to make anglaise. Cook to 85 degrees Celsius. Take off heat, add gelatin. Remove vanilla beans.\r\n2. Burmix to smooth. Chill to 40 degrees Celsius. Fold in soft cream. Pour mixture into insert fleximolds. Freeze in blast.",
                "recipe": 54,
                "dependent_steps_recipe_step": null,
                "step_ingredients": []
            },
            {
                "instructions": "1. In a small pot, bring cream to scald and reserve warm.\r\n2. In a medium pot make a dry caramel with the sugar. Once caramel is dark, break with hot cream. Cook on low heat to dissolve caramel.\r\n3. Mix water and cornstarch to create slurry. Add to caramel. Bring mixture to a boil. Allow to boil for 30 seconds. Remove from heat. Add bloomed gelatin. Burmix to smooth. Ice bath to chill glaze to 60 degrees Fahrenheit. Reserve to glaze entremet.",
                "step_ingredients": [],
                "recipe": 54,
                "dependent_steps_recipe_step": null,
                "type": 0,
                "name": "Caramel Glaze:",
                "step": 5
            }
        ],
        "name": "lime-mango entremet"
    },
    {
        "name": "lime-mango entremet",
        "steps": [
            {
                "step": 6,
                "type": 0,
                "name": "Almond Sponge",
                "step_ingredients": [],
                "recipe": 60,
                "dependent_steps_recipe_step": null,
                "instructions": "1. In a Robot Coupe, combine almond flour, powdered sugar, cake flour, 60 grams of egg whites, and heavy cream. Robot to make a paste.\r\n2. In a kitchen aide mixer, with the whip attachment, mix 160 grams of egg whites on medium. Slowly add the sugar to make a medium peak meringue. Fold meringue into paste. Spread onto a silpat lined sheet tray and bake in a pre heated 375 degree Fahrenheit oven for 8-10 minutes or until evenly browned. Allow to cool. Then cut 2-7 inch circles and spread one side with lime jam and sprinkle with Fleur de sel."
            },
            {
                "recipe": 60,
                "step_ingredients": [],
                "dependent_steps_recipe_step": null,
                "instructions": "1. Build upside down. Place acetate on a flat sheet tray. Place 8-inch stainless steal ring on sheet tray. Pipe chocolate mousse all over bottom first. Use a spatula to spread it evenly and up the sides of the ring. Next press frozen insert of mango cream and caramel cremeux into mousse. Press an almond sponge circle jam side down onto frozen insert. Top with more chocolate mousse and spread mousse to cover evenly. Then repeat with another frozen insert of mango cream and caramel cremeux into mousse and press an almond sponge circle jam side down onto frozen insert again. Top with more chocolate mousse to cover. Then top with almond petite beurre. Freeze entremet in blast freezer. Once totally frozen. Torch outer part of the ring and remove ring from entremet. Glaze entremet immediately with caramel glaze. Garnish sides of entremet with tempered manjari plaques.",
                "step": 8,
                "type": 0,
                "name": "Assembly"
            },
            {
                "step": 7,
                "name": "Almond Petite Beurre",
                "type": 0,
                "recipe": 60,
                "dependent_steps_recipe_step": null,
                "step_ingredients": [],
                "instructions": "1. Place all ingredients in Robot Coupe. Blend to form dough. Press into 7 3/4- inch ring. Remove ring. Bake in preheated 325 degree Fahrenheit oven for 15-18 minutes or until evenly golden brown."
            },
            {
                "name": "Caramel Cremeux",
                "type": 0,
                "step": 3,
                "instructions": "1. In a small saucepan, place scraped vanilla beans and cream. Bring to scald. Reserve and keep warm.\r\n2. In a medium saucepan, make a dry caramel by adding 1 tablespoon of sugar at a time to the hot pot to caramelize. Bring to dark caramel. Break caramel by adding warm cream to caramel. Cook over low heat to dissolve caramel. Temper in egg yolks. Cook over low heat to make anglaise. Cook to 85 degrees Celsius.",
                "recipe": 60,
                "dependent_steps_recipe_step": null,
                "step_ingredients": []
            },
            {
                "step": 1,
                "type": 0,
                "name": "Lime Jam",
                "recipe": 60,
                "step_ingredients": [],
                "dependent_steps_recipe_step": null,
                "instructions": "1. Place all ingredients in a small saucepan and cook over low heat, stir to prevent burning. Allow to boil and cook for 1 minute. Take off heat and allow to cool."
            },
            {
                "recipe": 60,
                "dependent_steps_recipe_step": null,
                "step_ingredients": [],
                "instructions": "1. In a small pot, keep heavy cream warm. In a medium pot.\r\n2. Make a dry caramel with the sugar. Once caramel is dark, break with hot cream. Temper in yolks to make anglaise. Cook to 85 degrees Celsius. Pour over chocolate and gelatin. Burmix to smooth. Cool chocolate mixture to 40 degrees Celsius. Fold in soft cream. Place in piping bag for assembly.",
                "step": 4,
                "name": "Chocolate Mousse",
                "type": 0
            },
            {
                "step": 2,
                "type": 0,
                "name": "Mango Vanilla Cream",
                "dependent_steps_recipe_step": null,
                "step_ingredients": [],
                "recipe": 60,
                "instructions": "1. In a small saucepan, place mango puree, inverted sugar, and vanilla beans. Cook over low-medium heat. Temper in yolks, cook over low heat to make anglaise. Cook to 85 degrees Celsius. Take off heat, add gelatin. Remove vanilla beans.\r\n2. Burmix to smooth. Chill to 40 degrees Celsius. Fold in soft cream. Pour mixture into insert fleximolds. Freeze in blast."
            },
            {
                "type": 0,
                "name": "Caramel Glaze:",
                "step": 5,
                "instructions": "1. In a small pot, bring cream to scald and reserve warm.\r\n2. In a medium pot make a dry caramel with the sugar. Once caramel is dark, break with hot cream. Cook on low heat to dissolve caramel.\r\n3. Mix water and cornstarch to create slurry. Add to caramel. Bring mixture to a boil. Allow to boil for 30 seconds. Remove from heat. Add bloomed gelatin. Burmix to smooth. Ice bath to chill glaze to 60 degrees Fahrenheit. Reserve to glaze entremet.",
                "dependent_steps_recipe_step": null,
                "recipe": 60,
                "step_ingredients": []
            }
        ],
        "id": 60,
        "author": "Gordon Ramsay",
        "picture_url": "/images/0/brioches.png",
        "description": "A very complicated cake"
    },
    {
        "picture_url": "/images/0/2011-04-05%2016.24.09.png",
        "id": 19,
        "author": "Julia Child",
        "description": "PARAPLUIE",
        "name": "Parapluie de Parmesan",
        "steps": [
            {
                "step": 1,
                "name": "step 1",
                "type": 10,
                "dependent_steps_recipe_step": null,
                "step_ingredients": [],
                "recipe": 19,
                "instructions": "4 Stone Parmesan \\n1 Half Stone Lobster \\n"
            },
            {
                "type": 1,
                "name": "step 4",
                "step": 4,
                "instructions": "Bake for 7 minutes",
                "recipe": 19,
                "dependent_steps_recipe_step": null,
                "step_ingredients": []
            },
            {
                "instructions": "Stir the parmesan into the lobster over a boiling pot of water",
                "step_ingredients": [],
                "dependent_steps_recipe_step": null,
                "recipe": 19,
                "type": 2,
                "name": "step 3",
                "step": 3
            },
            {
                "type": 1,
                "name": "step 6",
                "step": 6,
                "instructions": "Bake for three hours at 450 degrees C",
                "dependent_steps_recipe_step": null,
                "recipe": 19,
                "step_ingredients": []
            },
            {
                "instructions": "Roll into a thin sheet",
                "recipe": 19,
                "step_ingredients": [],
                "dependent_steps_recipe_step": null,
                "name": "step 5",
                "type": 3,
                "step": 5
            },
            {
                "name": "step 2",
                "type": 6,
                "step": 2,
                "instructions": "Chop the Lobster extensively",
                "step_ingredients": [],
                "recipe": 19,
                "dependent_steps_recipe_step": null
            }
        ]
    },
    {
        "name": "lime-mango entremet",
        "steps": [
            {
                "dependent_steps_recipe_step": null,
                "step_ingredients": [],
                "recipe": 52,
                "instructions": "\t\tEnter instructions here\r\n\t",
                "step": 1,
                "name": "Lime Jam",
                "type": 0
            }
        ],
        "description": "A very complicated cake",
        "id": 52,
        "picture_url": "/images/0/brioches.png",
        "author": "Gordon Ramsay"
    },
    {
        "description": "its a pie, within a pie",
        "id": 20,
        "picture_url": "/images/0/2011-04-05%2016.24.22.png",
        "author": "Julia Child",
        "name": "Pie d''Inception",
        "steps": [
            {
                "step": 2,
                "type": 3,
                "name": "step 2",
                "step_ingredients": [],
                "recipe": 20,
                "dependent_steps_recipe_step": {
                    "depended_upon": 1,
                    "step": 2,
                    "recipe": 20
                },
                "instructions": "Roll the pie into a pie crust"
            },
            {
                "instructions": "Pie",
                "step_ingredients": [],
                "dependent_steps_recipe_step": {
                    "depended_upon": 1,
                    "step": 1,
                    "recipe": 20
                },
                "recipe": 20,
                "name": "step 1",
                "type": 10,
                "step": 1
            },
            {
                "step": 4,
                "type": 1,
                "name": "step 4",
                "dependent_steps_recipe_step": null,
                "recipe": 20,
                "step_ingredients": [],
                "instructions": "BAKE THE PIES"
            },
            {
                "step_ingredients": [],
                "recipe": 20,
                "dependent_steps_recipe_step": null,
                "instructions": "Chop the resulting pie, into more pie based pie",
                "step": 3,
                "type": 6,
                "name": "step 3"
            }
        ]
    },
    {
        "name": "lime-mango entremet",
        "steps": [
            {
                "recipe": 59,
                "dependent_steps_recipe_step": null,
                "step_ingredients": [],
                "instructions": "1. In a small pot, bring cream to scald and reserve warm.\r\n2. In a medium pot make a dry caramel with the sugar. Once caramel is dark, break with hot cream. Cook on low heat to dissolve caramel.\r\n3. Mix water and cornstarch to create slurry. Add to caramel. Bring mixture to a boil. Allow to boil for 30 seconds. Remove from heat. Add bloomed gelatin. Burmix to smooth. Ice bath to chill glaze to 60 degrees Fahrenheit. Reserve to glaze entremet.",
                "step": 5,
                "name": "Caramel Glaze:",
                "type": 0
            },
            {
                "step": 2,
                "name": "Mango Vanilla Cream",
                "type": 0,
                "step_ingredients": [],
                "dependent_steps_recipe_step": null,
                "recipe": 59,
                "instructions": "1. In a small saucepan, place mango puree, inverted sugar, and vanilla beans. Cook over low-medium heat. Temper in yolks, cook over low heat to make anglaise. Cook to 85 degrees Celsius. Take off heat, add gelatin. Remove vanilla beans.\r\n2. Burmix to smooth. Chill to 40 degrees Celsius. Fold in soft cream. Pour mixture into insert fleximolds. Freeze in blast."
            },
            {
                "instructions": "1. In a small saucepan, place scraped vanilla beans and cream. Bring to scald. Reserve and keep warm.\r\n2. In a medium saucepan, make a dry caramel by adding 1 tablespoon of sugar at a time to the hot pot to caramelize. Bring to dark caramel. Break caramel by adding warm cream to caramel. Cook over low heat to dissolve caramel. Temper in egg yolks. Cook over low heat to make anglaise. Cook to 85 degrees Celsius.",
                "step_ingredients": [],
                "dependent_steps_recipe_step": null,
                "recipe": 59,
                "name": "Caramel Cremeux",
                "type": 0,
                "step": 3
            },
            {
                "type": 0,
                "name": "Almond Petite Beurre",
                "step": 7,
                "instructions": "1. Place all ingredients in Robot Coupe. Blend to form dough. Press into 7 3/4- inch ring. Remove ring. Bake in preheated 325 degree Fahrenheit oven for 15-18 minutes or until evenly golden brown.",
                "recipe": 59,
                "step_ingredients": [],
                "dependent_steps_recipe_step": null
            },
            {
                "instructions": "1. In a small pot, keep heavy cream warm. In a medium pot.\r\n2. Make a dry caramel with the sugar. Once caramel is dark, break with hot cream. Temper in yolks to make anglaise. Cook to 85 degrees Celsius. Pour over chocolate and gelatin. Burmix to smooth. Cool chocolate mixture to 40 degrees Celsius. Fold in soft cream. Place in piping bag for assembly.",
                "dependent_steps_recipe_step": null,
                "step_ingredients": [],
                "recipe": 59,
                "type": 0,
                "name": "Chocolate Mousse",
                "step": 4
            },
            {
                "type": 0,
                "name": "Lime Jam",
                "step": 1,
                "instructions": "1. Place all ingredients in a small saucepan and cook over low heat, stir to prevent burning. Allow to boil and cook for 1 minute. Take off heat and allow to cool.",
                "step_ingredients": [],
                "dependent_steps_recipe_step": null,
                "recipe": 59
            },
            {
                "type": 0,
                "name": "Almond Sponge",
                "step": 6,
                "instructions": "1. In a Robot Coupe, combine almond flour, powdered sugar, cake flour, 60 grams of egg whites, and heavy cream. Robot to make a paste.\r\n2. In a kitchen aide mixer, with the whip attachment, mix 160 grams of egg whites on medium. Slowly add the sugar to make a medium peak meringue. Fold meringue into paste. Spread onto a silpat lined sheet tray and bake in a pre heated 375 degree Fahrenheit oven for 8-10 minutes or until evenly browned. Allow to cool. Then cut 2-7 inch circles and spread one side with lime jam and sprinkle with Fleur de sel.",
                "recipe": 59,
                "dependent_steps_recipe_step": {
                    "recipe": 59,
                    "step": 6,
                    "depended_upon": 7
                },
                "step_ingredients": []
            },
            {
                "step": 8,
                "name": "Assembly",
                "type": 0,
                "dependent_steps_recipe_step": null,
                "recipe": 59,
                "step_ingredients": [],
                "instructions": "1. Build upside down. Place acetate on a flat sheet tray. Place 8-inch stainless steal ring on sheet tray. Pipe chocolate mousse all over bottom first. Use a spatula to spread it evenly and up the sides of the ring. Next press frozen insert of mango cream and caramel cremeux into mousse. Press an almond sponge circle jam side down onto frozen insert. Top with more chocolate mousse and spread mousse to cover evenly. Then repeat with another frozen insert of mango cream and caramel cremeux into mousse and press an almond sponge circle jam side down onto frozen insert again. Top with more chocolate mousse to cover. Then top with almond petite beurre. Freeze entremet in blast freezer. Once totally frozen. Torch outer part of the ring and remove ring from entremet. Glaze entremet immediately with caramel glaze. Garnish sides of entremet with tempered manjari plaques."
            }
        ],
        "description": "A very complicated cake",
        "picture_url": "/images/0/brioches.png",
        "id": 59,
        "author": "Gordon Ramsay"
    },
    {
        "steps": [
            {
                "step": 5,
                "name": "step 5",
                "type": 2,
                "step_ingredients": [],
                "dependent_steps_recipe_step": null,
                "recipe": 18,
                "instructions": "Stir flour, water, faux, sugar for twelve hours"
            },
            {
                "recipe": 18,
                "step_ingredients": [],
                "dependent_steps_recipe_step": null,
                "instructions": "Chill Faux for seven hours, thirty two minutes",
                "step": 2,
                "name": "step 2",
                "type": 7
            },
            {
                "step": 3,
                "name": "chop faux",
                "type": 6,
                "step_ingredients": [],
                "dependent_steps_recipe_step": {
                    "depended_upon": 2,
                    "step": 3,
                    "recipe": 18
                },
                "recipe": 18,
                "instructions": "Chop Faux into small pieces"
            },
            {
                "instructions": "Roll faux into flour",
                "recipe": 18,
                "dependent_steps_recipe_step": null,
                "step_ingredients": [],
                "type": 3,
                "name": "step 4",
                "step": 4
            },
            {
                "instructions": "Sugar 2 Kilos\\nFlour 4 Kilos \\nFaux 1 Kilo \\nWater 5 Kilos",
                "dependent_steps_recipe_step": null,
                "step_ingredients": [],
                "recipe": 18,
                "name": "step 1",
                "type": 10,
                "step": 1
            },
            {
                "step": 6,
                "name": "step 6",
                "type": 1,
                "recipe": 18,
                "step_ingredients": [],
                "dependent_steps_recipe_step": null,
                "instructions": "Bake into cake pan, 13 hours"
            }
        ],
        "name": "Faux Gateux",
        "description": "not real",
        "author": "Julia Child",
        "id": 18,
        "picture_url": "/images/0/2011-03-29%2014.47.42.png"
    },
    {
        "steps": [
            {
                "instructions": "eggs\\nsugar \\nil",
                "dependent_steps_recipe_step": null,
                "recipe": 15,
                "step_ingredients": [],
                "type": 10,
                "name": "step 1",
                "step": 1
            },
            {
                "step": 2,
                "name": "stir",
                "type": 2,
                "step_ingredients": [],
                "dependent_steps_recipe_step": {
                    "recipe": 15,
                    "depended_upon": 1,
                    "step": 2
                },
                "recipe": 15,
                "instructions": "Stir all this together"
            }
        ],
        "name": "Carrot Muffins",
        "author": "Gordon Ramsay",
        "id": 15,
        "picture_url": "/images/0/2011-03-29%2014.35.14.png",
        "description": "the health-food junk-food snack"
    },
    {
        "steps": [
            {
                "step": 3,
                "name": "step 3",
                "type": 2,
                "step_ingredients": [],
                "recipe": 22,
                "dependent_steps_recipe_step": {
                    "recipe": 22,
                    "depended_upon": 2,
                    "step": 3
                },
                "instructions": "EVERYTHING NEEDS TO BE STIRRED"
            },
            {
                "name": "step 4",
                "type": 1,
                "step": 4,
                "instructions": "BUT IT IN MUFFIN TINS AND BAKE AT 500 DEGREES FOR 12 Minutes",
                "dependent_steps_recipe_step": null,
                "step_ingredients": [],
                "recipe": 22
            },
            {
                "step": 1,
                "type": 10,
                "name": "step 1",
                "dependent_steps_recipe_step": null,
                "step_ingredients": [],
                "recipe": 22,
                "instructions": "Oranges \\nOrange Peelz \\nFlour\\nSuger \\nOrange Blossom Water"
            },
            {
                "recipe": 22,
                "step_ingredients": [],
                "dependent_steps_recipe_step": {
                    "recipe": 22,
                    "depended_upon": 1,
                    "step": 2
                },
                "instructions": "CHOP THE ORANGES\\nLEAVE NO ORANGE UNCHOPT",
                "step": 2,
                "name": "step 2",
                "type": 6
            }
        ],
        "name": "Orange Muffins",
        "description": "These Muffins have Orange flavoring",
        "author": "Jamie Oliver",
        "picture_url": "/images/0/2011-04-05%2016.25.21.png",
        "id": 22
    },
    {
        "picture_url": "/images/0/2011-03-29%2014.37.13.png",
        "author": "Gordon Ramsay",
        "id": 16,
        "description": "staple",
        "steps": [
            {
                "name": "step 1",
                "type": 10,
                "step": 1,
                "instructions": "eggs\\nmelted butter\\nsugar",
                "dependent_steps_recipe_step": null,
                "recipe": 16,
                "step_ingredients": []
            },
            {
                "instructions": "cream ingredients together",
                "recipe": 16,
                "dependent_steps_recipe_step": {
                    "recipe": 16,
                    "depended_upon": 1,
                    "step": 2
                },
                "step_ingredients": [],
                "type": 2,
                "name": "cream",
                "step": 2
            }
        ],
        "name": "blueberry muffins"
    },
    {
        "description": "cream puff dough",
        "picture_url": "/images/0/2011-03-29%2014.22.44.png",
        "author": "Gordon Ramsay",
        "id": 10,
        "steps": [
            {
                "step": 2,
                "type": 2,
                "name": "step 2",
                "recipe": 10,
                "dependent_steps_recipe_step": null,
                "step_ingredients": [],
                "instructions": "mix in flour"
            },
            {
                "type": 2,
                "name": "step 1",
                "step": 1,
                "instructions": "boil water with butter and salt",
                "dependent_steps_recipe_step": null,
                "recipe": 10,
                "step_ingredients": []
            }
        ],
        "name": "pate a choux"
    },
    {
        "picture_url": "/images/0/2011-04-05%2016.25.05.png",
        "author": "Julia Child",
        "id": 21,
        "description": "Clean slate",
        "steps": [
            {
                "step_ingredients": [],
                "dependent_steps_recipe_step": null,
                "recipe": 21,
                "instructions": "Roll into Tarte Shape",
                "step": 3,
                "type": 3,
                "name": "step 3"
            },
            {
                "instructions": "Flour Five Kilos \\nSugar Five Kilos \\nWater Three Kilos",
                "recipe": 21,
                "step_ingredients": [],
                "dependent_steps_recipe_step": {
                    "recipe": 21,
                    "step": 1,
                    "depended_upon": 1
                },
                "name": "step 1",
                "type": 10,
                "step": 1
            },
            {
                "step": 4,
                "name": "step 4",
                "type": 1,
                "step_ingredients": [],
                "dependent_steps_recipe_step": null,
                "recipe": 21,
                "instructions": "Bake it, or don't"
            },
            {
                "instructions": "Stir ingredients in bowl for nine (9) minutes",
                "step_ingredients": [],
                "dependent_steps_recipe_step": {
                    "step": 2,
                    "depended_upon": 1,
                    "recipe": 21
                },
                "recipe": 21,
                "name": "step 2",
                "type": 2,
                "step": 2
            }
        ],
        "name": "Tarte Blanche"
    },
    {
        "id": 17,
        "picture_url": "/images/0/2011-03-29%2014.47.34.png",
        "author": "Gordon Ramsay",
        "description": "a flaky pastry",
        "steps": [
            {
                "name": "step 2",
                "type": 7,
                "step": 2,
                "instructions": "flatten butter into a square and chill",
                "recipe": 17,
                "step_ingredients": [],
                "dependent_steps_recipe_step": {
                    "depended_upon": 1,
                    "step": 2,
                    "recipe": 17
                }
            },
            {
                "name": "step 1",
                "type": 10,
                "step": 1,
                "instructions": "butter",
                "dependent_steps_recipe_step": null,
                "step_ingredients": [],
                "recipe": 17
            }
        ],
        "name": "croissants"
    },
    {
        "description": "A custard used in French tarts",
        "picture_url": "/images/0/2011-03-29%2014.33.47%202.png",
        "author": "Gordon Ramsay",
        "id": 11,
        "steps": [
            {
                "instructions": "Whisk to ribbon stage",
                "dependent_steps_recipe_step": null,
                "step_ingredients": [],
                "recipe": 11,
                "type": 2,
                "name": "step 2",
                "step": 2
            },
            {
                "step_ingredients": [],
                "dependent_steps_recipe_step": null,
                "recipe": 11,
                "instructions": "boil two ingredients together",
                "step": 4,
                "type": 1,
                "name": "step 4"
            },
            {
                "recipe": 11,
                "step_ingredients": [],
                "dependent_steps_recipe_step": null,
                "instructions": "3 eggs\\n1 pt milk\\n75g sugar",
                "step": 1,
                "type": 10,
                "name": "step 1"
            },
            {
                "step": 3,
                "name": "step 3",
                "type": 10,
                "dependent_steps_recipe_step": null,
                "step_ingredients": [],
                "recipe": 11,
                "instructions": "1 pt milk\\n75g sugar"
            }
        ],
        "name": "Pastry Cream"
    },
    {
        "steps": [
            {
                "step": 1,
                "type": 10,
                "name": "step 1",
                "dependent_steps_recipe_step": null,
                "recipe": 13,
                "step_ingredients": [],
                "instructions": "1 pt cream\\n3 eggs\\n4 sheets gelatin"
            }
        ],
        "name": "Chocolate Mousse",
        "description": "A velvety dessert",
        "author": "Gordon Ramsay",
        "id": 13,
        "picture_url": "/images/0/2011-03-29%2014.34.11.png"
    }
  ];

  export const menus = [
    {
      "name": "Taco Tuesday",
      recipes: [
        {
          "id": 123,
          "name": "Coconut Lime Pork Tacos",
          "amount": {
            "measure": "persons",
            "amount": 2
          },
          "role": "main"
        },
        {
          "id": 154,
          "name": "Guocomole",
          "amount": {
            "measure": "cups",
            "amount": 1
          },
          "role": "side"
        }
      ]
    }
  ]
