let button = document.getElementById('btn');

button.addEventListener('click', () => {
    const height = parseInt(document.getElementById('height').value); //ambil nilai height
    const weight = parseInt(document.getElementById('weight').value); //ambil nilai weight
    const result = document.getElementById('output'); //ambil element ID output
    let height_status=false, weight_status=false; //deklarasi status tinggi dan berat

    if(height === '' || isNaN(height) || (height <= 0) || (height > 500)){ //jika nilai tinggi INVALID (kosong, negatif atau lebih dari 500cm)
        document.getElementById('height_error').innerHTML = '<i>Silakan inputkan angka dengan benar.</i>';
    }else{
        document.getElementById('height_error').innerHTML = '';
        height_status=true;
    }

    if(weight === '' || isNaN(weight) || (weight <= 0) || (weight > 1000)){ //jika nilai berat INVALID (kosong atau negatif) 
        document.getElementById('weight_error').innerHTML = '<i>Silakan inputkan angka dengan benar.</i>';
    }else{
        document.getElementById('weight_error').innerHTML = '';
        weight_status=true;
    }

    if(height_status && weight_status){ //jika nilai tinggi dan berat sudah benar

        const bmi = (weight / ((height*height)/10000)).toFixed(2); //rumus BMI (dengan 2 bilangan desimal)

        const underweight_bmi_text = "Your"


        if(bmi <= 18.5){ //jika BMI < 18.6
            res = '<h2>Nilai BMI: <b>' + bmi +'</b> <font color="red">(Under Weight) ⚠️</font></h2>'
            res += '<br>';
            res += 'Jika BMI Anda berada di bawah rentang berat badan sehat, Anda kehilangan berat badan tanpa berusaha untuk menurunkannya, atau mengalami kesulitan menambah berat badan, Anda sebaiknya berkonsultasi dengan dokter.';
            res += '<br><br>';
            res += 'Jika Anda khawatir bahwa Anda atau seseorang yang Anda pedulikan mungkin memiliki gangguan makan, bicarakan dengan dokter Anda — penting untuk mendapatkan perawatan dari tenaga kesehatan profesional.';
            result.innerHTML = '<div class=result-box>'+res+'</div>';
        }else if(bmi >= 18.6 && bmi <= 24.9){
            result.innerHTML = '<div class=result-box><h2>Nilai BMI: <b>' + bmi +'</b> (Normal) ✅</h2></div>';
        }else{
            res = '<h2>Nilai BMI: <b>' + bmi +'</b> <font color="red">(Over Weight) ⚠️</font></h2>';
            res += '<br>';
            res += 'Cara terbaik untuk mengatasi obesitas adalah dengan mengonsumsi makanan sehat yang rendah kalori dan berolahraga secara teratur. Untuk melakukannya, Anda sebaiknya:';
            res += '<br><br>';
            res += '<b>1.</b> mengonsumsi makanan seimbang yang terkontrol kalorinya sesuai rekomendasi dokter umum atau tenaga kesehatan pengelola penurunan berat badan (seperti ahli gizi)';
            res += '<br>';
            res += '<b>2.</b> bergabung dengan kelompok penurunan berat badan di lingkungan Anda';
            res += '<br>';
            res += '<b>3.</b> melakukan aktivitas seperti berjalan cepat, jogging, berenang, atau tenis selama 150 hingga 300 menit (dua setengah hingga lima jam) per minggu';
            res += '<br>';
            res += '<b>4.</b> makan secara perlahan dan menghindari situasi di mana Anda tahu Anda bisa tergoda untuk makan berlebihan';
            res += '<br>';
            res += 'Anda mungkin juga mendapatkan manfaat dari dukungan psikologis dari tenaga kesehatan profesional yang terlatih untuk membantu mengubah cara Anda berpikir tentang makanan dan pola makan.';
            res += '<br><br>';
            res += 'Jika perubahan gaya hidup saja tidak membantu Anda menurunkan berat badan, obat yang disebut orlistat mungkin akan direkomendasikan. Jika dikonsumsi dengan benar, obat ini bekerja dengan mengurangi jumlah lemak yang Anda serap selama proses pencernaan.';
            result.innerHTML = '<div class=result-box>'+res+'</div>';
        }
    }else{
        alert('The form has errors');
        result.innerHTML = '';
    }
});