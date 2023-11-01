window.onload = function() {
    document.getElementById("lookupButton").onclick = lookupCode;

}

function lookupCode() {
    const sku = document.getElementById("skuInput").value;

    const part = parsePartCode(sku);
    console.table(part)

    displayPartInfo(part);

}

function displayPartInfo(part) {
    const supplier = document.getElementById("supplier")
    const partNumber = document.getElementById("part")
    const size = document.getElementById("size")

    supplier.innerText = part.supplierCode;
    partNumber.innerText = part.productNumber;
    size.innerText = part.size
}