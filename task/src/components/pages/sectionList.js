{/*
  <SectionList
    renderItem={({item}) => <ListItem title={item.name} />}
    renderSectionHeader={({section}) => <Text>{section.key}</Text>}
    sections={emptyArray1}
    keyExtractor={item => item.key}
  />
*/}

let sectionData = [
    {
        "id": 1,
        "name": "Spargelfest",
        "beginning": "2017-02-01T09:30:00.000Z",
        "ending": "2017-02-01T17:30:00.000Z",
        "picture": "https://static.pexels.com/photos/6548/cold-snow-winter-mountain.jpe…",
        "address": {
            "street": "Platz der Deutschen Einheit 1",
            "postalcode": "20457",
            "city": "Hamburg",
            "country": "BRD"
        },
        "latitude": 53.531648,
        "longitude": 9.985257,
        "info": "Mauris tortor sed? Pulvinar nascetur odio, est. Vel, mid mid dictum…"
    },
    {
        "id": 2,
        "name": "Music Festival",
        "beginning": "2017-02-02T09:30:00.000Z",
        "ending": "2017-02-02T14:30:00.000Z",
        "picture": "https://static.pexels.com/photos/6548/cold-snow-winter-mountain.jpe…",
        "address": {
            "street": "Platz der Deutschen Einheit 1",
            "postalcode": "20457",
            "city": "Hamburg",
            "country": "BRD"
        },
        "latitude": 53.531648,
        "longitude": 9.985257,
        "info": "Mauris tortor sed? Pulvinar nascetur odio, est. Vel, mid mid dictum…"
    },
    {
        "id": 3,
        "name": "Another Festival",
        "beginning": "2017-02-02T14:30:00.000Z",
        "ending": "2017-02-02T17:30:00.000Z",
        "picture": "https://static.pexels.com/photos/6548/cold-snow-winter-mountain.jpe…",
        "address": {
            "street": "Platz der Deutschen Einheit 1",
            "postalcode": "20457",
            "city": "Hamburg",
            "country": "BRD"
        },
        "latitude": 53.531648,
        "longitude": 9.985257,
        "info": "Mauris tortor sed? Pulvinar nascetur odio, est. Vel, mid mid dictum…"
    }
];
var emptyArray = [];


  componentWillMount(){
    
    sectionData.map((data, key) => {
      if(!emptyArray.includes(moment(data.beginning).format('DD.MM.YYYY'))){
        var obj = {};
        obj.key = moment(data.beginning).format('DD.MM.YYYY');
        obj.data = [];
        emptyArray1.push(obj);
        emptyArray.push(moment(data.beginning).format('DD.MM.YYYY'))
      }
    });
    sectionData.map((data1, key) =>{
      emptyArray1.map((date, k) => {
        if(date.key === moment(data1.beginning).format('DD.MM.YYYY')){
          data1.key = key;
          emptyArray1[k].data.push(data1);
        }
      })
    });
    }