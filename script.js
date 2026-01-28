// ===== PMB =====
let pmb = JSON.parse(localStorage.getItem("pmb")) || [];
if (document.getElementById("formPMB")) {
    formPMB.onsubmit = e => {
        e.preventDefault();
        pmb.push({nama:nama.value, nisn:nisn.value, jurusan:jurusan.value});
        localStorage.setItem("pmb", JSON.stringify(pmb));
        formPMB.reset();
        tampilPMB();
    };
    function tampilPMB(){
        tabelPMB.innerHTML = pmb.map((d,i)=>
            `<tr><td>${i+1}</td><td>${d.nama}</td><td>${d.nisn}</td><td>${d.jurusan}</td></tr>`
        ).join("");
    }
    tampilPMB();
}

// ===== MAHASISWA =====
let mhs = JSON.parse(localStorage.getItem("mhs")) || [];
if (document.getElementById("formMHS")) {
    formMHS.onsubmit = e => {
        e.preventDefault();
        mhs.push({nama:namaM.value, nim:nim.value});
        localStorage.setItem("mhs", JSON.stringify(mhs));
        formMHS.reset();
        tampilMHS();
    };
    function tampilMHS(){
        tabelMHS.innerHTML = mhs.map((d,i)=>
            `<tr><td>${i+1}</td><td>${d.nama}</td><td>${d.nim}</td></tr>`
        ).join("");
    }
    tampilMHS();
}

// ===== ALUMNI =====
let alumni = JSON.parse(localStorage.getItem("alumni")) || [];
if (document.getElementById("formAL")) {
    formAL.onsubmit = e => {
        e.preventDefault();
        alumni.push({nama:namaA.value, tahun:tahun.value});
        localStorage.setItem("alumni", JSON.stringify(alumni));
        formAL.reset();
        tampilAL();
    };
    function tampilAL(){
        tabelAL.innerHTML = alumni.map((d,i)=>
            `<tr><td>${i+1}</td><td>${d.nama}</td><td>${d.tahun}</td></tr>`
        ).join("");
    }
    tampilAL();
}
