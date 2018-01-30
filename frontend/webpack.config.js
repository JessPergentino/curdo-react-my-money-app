//Configuração do webpack

const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin') // referencia para o plugin que irá extrair o css e aplicar o processo com o stle-loader e css-loader

//exportando as configurações
module.exports = {
    entry: './src/index.jsx', //ponto de entrada - onde a aplicação começa e vai importando os outros modulos
    output: {
        path: __dirname + '/public', //ponto de saida
        filename: './app.js' // nome do arquivo
    },
    devServer: { //condifguração do server
        port:8080, // porta onde irá rodar
        contentBase: './public', // diretorio que irá ler

    },
    resolve: { 
        extensions: ['', '.js', '.jsx'], // interpreta essas extenções
        alias: { // apelidos
            modules: __dirname + '/node_modules',
            jquery: 'modules/admin-lte/plugins/jQuery/jquery-2.2.3.min.js',
            bootstrap: 'modules/admin-lte/bootstrap/js/bootstrap.js'
        }
    },
    plugins: [ // configuração dos plugins
        new webpack.ProvidePlugin({ // Disponibilar o jQuery - referenciar o jquery
            $: 'jquery', // aponta para o jquery
            jQuery: 'jquery',
            'window.jQuery': 'jquery'
        }),
        new ExtractTextPlugin('app.css') // Outro plugin - apontando qual a classe css que ele vai gerar apartir do loader
    ],
    module: { // configuração dos loaders
        loaders: [{ // lista de loaders
            test: /.js[x]?$/, // teste para as extenções .js e .jsx
            loader: 'babel-loader', // loader
            exclude: /node_modules/, // excluir a pasta
            query: {
                presets: ['es2015', 'react'], //presets para passar nos arquivos .js e .jsx
                plugins: ['transform-object-rest-spread'] // plugin para transformar os operadores spread para fazer o transpile
            }
        }, {
            test: /\.css$/, // teste para arquivos css
            loader: ExtractTextPlugin.extract('style-loader', 'css-loader') //loaders
        }, {
            test: /\.woff|.woff2|.ttf|.eot|.svg|.png|.jpg*.*$/, // teste para arquivos de fontes e de imagens
            loader: 'file' //loaders
        }]

    }
}