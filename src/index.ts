
function convert(filename: string) {

}

function start() {
    if (process.argv.length < 2) {
        throw 'Insufficient arguments, must be yarn start filename'
    }
}

function main() {
    try {
        start()
    }
    catch (error) {
        console.error(error)
        return 1
    }

    return 0
}

main()