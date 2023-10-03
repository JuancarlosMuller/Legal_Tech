import base64

# Ruta del archivo DOCX
docx_file_path = "C:\\Users\\56993\\Documents\\01.- Programacion\\Projects\\02.- Personales\\LM Abogados\\src\\img\\COTIZACION.docx"

# Lee el contenido del archivo DOCX y conviértelo a base64
with open(docx_file_path, "rb") as file:
    base64_docx = base64.b64encode(file.read()).decode("utf-8")

# Guarda la cadena base64 en un archivo
with open("documento_base64.txt", "w") as base64_file:
    base64_file.write(base64_docx)

# Muestra la cadena base64 en la consola
print(base64_docx)

print("Archivo base64 guardado como 'documento_base64.txt'")
