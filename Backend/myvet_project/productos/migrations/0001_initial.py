
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Categoria',
            fields=[
                ('id_categoria', models.AutoField(primary_key=True, serialize=False)),
                ('nombre_categoria', models.CharField(max_length=100)),
                ('descripcion', models.TextField(max_length=1000)),
            ],
            options={
                'verbose_name': 'Categoria',
                'verbose_name_plural': 'Categorias',
                'db_table': 'categoria',
            },
        ),
        migrations.CreateModel(
            name='Producto',
            fields=[
                ('id_producto', models.AutoField(primary_key=True, serialize=False)),
                ('nombre_producto', models.CharField(max_length=100)),
                ('descripcion', models.TextField(max_length=1000)),
                ('precio', models.DecimalField(decimal_places=2, max_digits=10)),
                ('marca', models.CharField(max_length=50)),
                ('tipo_animal', models.CharField(max_length=50)),
                ('imagen_url', models.CharField(max_length=200)),
                ('id_categoria', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='productos.categoria')),
            ],
            options={
                'verbose_name': 'Producto',
                'verbose_name_plural': 'Productos',
                'db_table': 'producto',
            },
        ),
        migrations.CreateModel(
            name='Sucursal',
            fields=[
                ('id_sucursal', models.AutoField(primary_key=True, serialize=False)),
                ('nombre', models.CharField(max_length=50)),
                ('direccion', models.CharField(max_length=100)),
                ('ciudad', models.CharField(max_length=50)),
                ('pais', models.CharField(max_length=50)),
                ('telefono', models.CharField(max_length=20)),
            ],
        ),
        migrations.CreateModel(
            name='ProductoSucursal',
            fields=[
                ('id_producto_sucursales', models.AutoField(primary_key=True, serialize=False)),
                ('stock', models.IntegerField()),
                ('id_producto', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='productos.producto')),
                ('id_sucursal', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='productos.sucursal')),
            ],
        ),
        migrations.CreateModel(
            name='ProductoCategoria',
            fields=[
                ('id_producto_categoria', models.AutoField(primary_key=True, serialize=False)),
                ('id_categoria', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='productos.categoria')),
                ('id_producto', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='productos.producto')),
            ],
        ),
    ]
