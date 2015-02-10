//Assignment 2-A Part 1
//Due Feb 12
//This short exercise will help you gain additional proficiency working with JavaScript objects


//Information about cities can be easily represented as JavaScript objects
var city1 = {
    name:"Boston",
    pop:657000,
    "year founded":1630
};
var city2 = {
    name:"Cambridge",
    pop:120000,
    "year founded":1631
};

//TODO: write a function that takes two city objects as parameter
//and returns the name of city that has a larger population
function whichCityIsLarger(a,b){
    //hint: since a and b are objects, you can access their "pop" property using a.pop
    //compare populations, and return the "name" property of the appropriate cit
    var Aname = a.name;
    var Bname = b.name;
    var Apop = a.pop;
    var Bpop = b.pop;
    if(Apop>Bpop)
    {
        return Aname;
    }
    else if(Bpop>Apop)
    {
        return Bname;
    }
    else
    {
        var Equal = "The pop of two city are equal."
        return Equal;
    }
}
console.log( whichCityIsLarger(city1,city2) );


//TODO: write a function that returns the name of the city that is older
function whichCityIsOlder(a,b){
    //hint: more or less the same as above, but notice something weird about the property name "year founded"?
    //Can you still use the dot notation? If not, what should you do?

    //I want to change the object to a String, so that I could select the year and compare it.
    var StringCity1 = JSON.stringify(a);
    var StringCity2 = JSON.stringify(b);

    //I need some parameters to help me found where the data describe year in the string.
    var switch1 = 0;
    var switch2 = 0;
    var switch3 = 0;

    //I need this to remember the data of year in the string.
    var yeartime1 = 0;
    var yeartime2 = 0;

    var Aname = a.name;
    var Bname = b.name;

    for(i=0;i<StringCity1.length;i++)
    {
        //I only need the data of year, so I need to found where the 'year' is ,and than, find out where the founded is, because
        //sometimes, may be there are not only one parameters with the name of 'year', may be 'startYear' or something else, I only
        //need the year founded in this object, so I found 'year' first than found 'founded'.
        if(StringCity1.charAt(i)=='y')
        {
            if(StringCity1.charAt(i+1)=='e')
            {
                if(StringCity1.charAt(i+2)=='a')
                {
                    if(StringCity1.charAt(i+3)=='r')
                    {
                        i=i+3;
                        switch1 = 1;
                    }
                }
            }
        }

        //I found the 'year',than found the 'founded'.
        if(switch1==1)
        {
            if(StringCity1.charAt(i)=='f')
            {
                //Because sometimes somebody may write 'year founded' like 'yearfounded' so I make this judgement.
                if((StringCity1.charAt(i-1)=='r')||
                    StringCity1.charAt(i-2)=='r')
                {
                    if(StringCity1.charAt(i+1)=='o')
                    {
                        if(StringCity1.charAt(i+2)=='u')
                        {
                            if(StringCity1.charAt(i+3)=='n')
                            {
                                if(StringCity1.charAt(i+4)=='d')
                                {
                                    if(StringCity1.charAt(i+5)=='e')
                                    {
                                        if(StringCity1.charAt(i+6)=='d')
                                        {
                                            i=i+6;
                                            switch3 = 1;
                                        }

                                    }
                                }
                            }
                        }
                    }
                }
            }
        }

        /*finally we found both the 'year' and we have make sure that it is the 'year founded' than I need to get the data of it*/
        if((switch1==1)&&(switch3==1))
        {
            if(StringCity1.charAt(i)==":")
            {
                switch2 = 1;
            }
        }

        if(switch2 == 1)
        {
            yeartime1 = Number(StringCity1.charAt(i+1)*1000)+Number(StringCity1.charAt(i+2)*100)
            +Number(StringCity1.charAt(i+3)*10)+Number(StringCity1.charAt(i+4));

            i=i+4;
            switch2 = 0;
            switch1 = 0;
            switch3 = 0;
        }
    }

    //Do the same thing to get data of 'year founded' for another city.
    for(i=0;i<StringCity2.length;i++)
    {
        if(StringCity2.charAt(i)=='y')
        {
            if(StringCity2.charAt(i+1)=='e')
            {
                if(StringCity2.charAt(i+2)=='a')
                {
                    if(StringCity2.charAt(i+3)=='r')
                    {
                        i=i+3;
                        switch1 = 1;
                    }
                }
            }
        }

        if(switch1==1)
        {
            if(StringCity2.charAt(i)=='f')
            {
                if((StringCity2.charAt(i-1)=='r')||
                    StringCity2.charAt(i-2)=='r')
                {
                    if(StringCity2.charAt(i+1)=='o')
                    {
                        if(StringCity2.charAt(i+2)=='u')
                        {
                            if(StringCity2.charAt(i+3)=='n')
                            {
                                if(StringCity2.charAt(i+4)=='d')
                                {
                                    if(StringCity2.charAt(i+5)=='e')
                                    {
                                        if(StringCity2.charAt(i+6)=='d')
                                        {
                                            i=i+6;
                                            switch3 = 1;
                                        }

                                    }
                                }
                            }
                        }
                    }
                }
            }
        }

        if((switch1==1)&&(switch3==1))
        {
            if(StringCity2.charAt(i)==":")
            {
                switch2 = 1;
            }
        }

        if(switch2 == 1)
        {
            yeartime2 = Number(StringCity2.charAt(i+1)*1000)+Number(StringCity2.charAt(i+2)*100)
            +Number(StringCity2.charAt(i+3)*10)+Number(StringCity2.charAt(i+4));

            i=i+4;
            switch2 = 0;
            switch1 = 0;
            switch3 = 0;
        }
    }


    if(yeartime1<yeartime2)
    {
        return console.log(Aname);
    }
    else if(yeartime1>yeartime2)
    {
        return console.log(Bname);
    }
    else
    {
        return console.log("Equal");
    }
}

//Run the funcation to get which city is older.
whichCityIsOlder(city1,city2);