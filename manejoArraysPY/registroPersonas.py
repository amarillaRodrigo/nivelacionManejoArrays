# Paso 1: Entrada
num_personas = int(input("Ingrese el número de personas que desea registrar: "))
personas = []

for i in range(num_personas):
    nombre = input(f"Ingrese el nombre de la persona {i + 1}: ")
    edad = int(input(f"Ingrese la edad de la persona {i + 1}: "))
    nota = float(input(f"Ingrese la nota de la persona {i + 1}: "))
    personas.append([nombre, edad, nota])

# Paso 2: Procesamiento
# Ordenar la lista principal en función de las notas, de mayor a menor
personas_ordenadas = sorted(personas, key=lambda x: x[2], reverse=True)

# Paso 3: Salida
print("Lista de personas tal como fueron ingresadas:")
for persona in personas:
    print(f"Nombre: {persona[0]}, Edad: {persona[1]}, Nota: {persona[2]}")

print("\nLista de personas ordenadas por nota (de mayor a menor):")
for persona in personas_ordenadas:
    print(f"Nombre: {persona[0]}, Edad: {persona[1]}, Nota: {persona[2]}")