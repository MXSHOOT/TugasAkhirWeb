//function getForm
function getForm() {
    let nm = document.getElementById("nm").value
    var jw = formPendaftaran.tujuan[formPendaftaran.tujuan.selectedIndex].text
    let dw = document.getElementById("dw").value
    let kp = document.getElementById("kp").value
    let tlp = document.getElementById("tlp").value
    let email = document.getElementById("email").value
    let web = document.getElementById("web").value
    let al = document.getElementById("al").value
    let lt = document.getElementById("lt").value
    

    document.write("Hasil Input <br>")
    document.write("Nama Tempat Wisata : " + nm + "<br>")
    document.write("Jenis Wisata : " + jw + "<br>")
    document.write("Deskripsi Wisata : " + dw + "<br>")
    document.write("Kontak Person : " + kp + "<br>")
    document.write("Nomor Telephone : " + tlp + "<br>")
    document.write("Email : " + email + "<br>")
    document.write("Alamat Web : " + web + "<br>")
    document.write("Alamat Lengkap : " + al + "<br>")
    document.write("Lotitude,Longitude : " + lt + "<br>")


}
function validateForm() {
    if (document.forms["formPendaftaran"]["nm"].value == "") {
        alert("Nama Tidak Boleh Kosong");
        document.forms["formPendaftaran"]["nm"].focus();
        return false;
    }
    if (document.forms["formPendaftaran"]["jw"].selectedIndex < 1) {
        alert("Pilih Jenis Wisata.");
        document.forms["formPendaftaran"]["jw"].focus();
        return false;
    }
    if (document.forms["formPendaftaran"]["dw"].value == "") {
        alert("Nama Tidak Boleh Kosong");
        document.forms["formPendaftaran"]["dw"].focus();
        return false;
    }
    if (document.forms["formPendaftaran"]["kp"].value == "") {
        alert("Nama Tidak Boleh Kosong");
        document.forms["formPendaftaran"]["kp"].focus();
        return false;
    }
    if (document.forms["formPendaftaran"]["tlp"].value == "") {
        alert("Nama Tidak Boleh Kosong");
        document.forms["formPendaftaran"]["tlp"].focus();
        return false;
    }
    if (document.forms["formPendaftaran"]["email"].value == "") {
        alert("Email Tidak Boleh Kosong");
        document.forms["formPendaftaran"]["email"].focus();
        return false;
    }
    if (document.forms["formPendaftaran"]["web"].value == "") {
        alert("Nama Tidak Boleh Kosong");
        document.forms["formPendaftaran"]["web"].focus();
        return false;
    }
    if (document.forms["formPendaftaran"]["al"].value == "") {
        alert("Nama Tidak Boleh Kosong");
        document.forms["formPendaftaran"]["al"].focus();
        return false;
    }
    if (document.forms["formPendaftaran"]["lt"].value == "") {
        alert("Nama Tidak Boleh Kosong");
        document.forms["formPendaftaran"]["lt"].focus();
        return false;
    }
}