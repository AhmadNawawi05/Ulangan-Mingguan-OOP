// var gaji = {
//     jumlah : function proses(){
//         a = document.getElementById('1').value;
//         b = document.getElementById('2').value;

//         if(b == "satu"){
//             document.getElementById('4').value = "ss";
//         }
//     }
// }

// function proses(){
//     a = document.getElementById('1').value;
//     b = document.getElementById('2').value;

//     if(b == 'satu'){
//         document.getElementById('4').value = "ss"
//     }
// }

// var gaji = {
//     nama : "Ahmad Nawawi",
//     gol : "2",
//     kel : true,
//     hsl : 900000,
    
// }

// document.getElementById('4').value = gaji.hsl;


function proses(){
  
    var b = document.getElementById('2').value;
    var c = 500000 + 500000;
    var d = 750000 + 500000;
    var e = 900000 + 500000;
    
    if(b == "Satu"){
        var gaji = {
    gol : "1",
    stat : prompt("Apakah Anda Berkeluarga...? (Ya Atau Tidak)"),
    
    pajak : 100000,
    hsl : c - 100000,

        }
        document.getElementById('4').value = gaji.gol;
        document.getElementById('5').value = gaji.stat;
        if (gaji.stat == "Ya") {
            document.getElementById('6').value = c ;
        }
        else{
            document.getElementById('6').value = "Kosong"
        }
        document.getElementById('7').value = gaji.pajak;
        document.getElementById('8').value = gaji.hsl;

    }
    else if(b == "Dua"){
        var gaji = {
            gol : "2",
            stat : prompt("Apakah Anda Berkeluarga...? (Ya Atau Tidak)"),
            
            pajak : 100000,
            hsl : d - 100000,
        
                }
                document.getElementById('4').value = gaji.gol;
                document.getElementById('5').value = gaji.stat;
                if (gaji.stat == "Ya") {
                    document.getElementById('6').value = d;
                }
                else{
                    document.getElementById('6').value = "Kosong"
                }
                document.getElementById('7').value = gaji.pajak;
                document.getElementById('8').value = gaji.hsl;
    }
    else if (b == "Tiga") {
        var gaji = {
            gol : "3",
            stat : prompt("Apakah Anda Berkeluarga...? (Ya Atau Tidak)"),
            
            pajak : 100000,
            hsl : e - 100000,
        
                }
                document.getElementById('4').value = gaji.gol;
                document.getElementById('5').value = gaji.stat;
                if (gaji.stat == "Ya") {
                    document.getElementById('6').value = e;
                }
                else{
                    document.getElementById('6').value = "Kosong"
                }
                document.getElementById('7').value = gaji.pajak;
                document.getElementById('8').value = gaji.hsl;
    }

}