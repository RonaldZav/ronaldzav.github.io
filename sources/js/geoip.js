document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('formIP').addEventListener('submit', function(event) {
      event.preventDefault();
  
      const access_key = "1102e59c70f27fc9a45b28dcdde99734";
      const ipv4 = document.getElementById('ipv4').value;
      fetch(`http://api.ipstack.com/${ipv4}?access_key=${access_key}`)
        .then(response => response.json())
        .then(data => {
          mostrarTabla(data);
        })
        .catch(error => {
          console.error('Error al obtener la información de geolocalización:', error);
        });
    });
  
    function mostrarTabla(data) {
      const cuerpoTabla = document.getElementById('cuerpoTabla');
      
      cuerpoTabla.innerHTML = '';
  
      const campos = {
        "continent_name": "Continente",
        "country_name": "País",
        "region_name": "Región",
        "city": "Ciudad",
        "zip": "Código Postal",
        "latitude": "Latitud",
        "longitude": "Longitud",
        "isp": "Proveedor de Internet"
      };
  

      for (const campo in campos) {
        const valor = campo === 'isp' ? data['connection']['isp'] : data[campo];
        
        if (valor !== null) {
          const fila = document.createElement('tr');
          const celdaCampo = document.createElement('td');
          const celdaValor = document.createElement('td');
  
          celdaCampo.textContent = campos[campo];
          celdaValor.textContent = valor;
  
          fila.appendChild(celdaCampo);
          fila.appendChild(celdaValor);
          cuerpoTabla.appendChild(fila);
        }
      }
    }
  });
