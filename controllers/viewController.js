const RESOURCE_PATH = '/collections'

const viewController = {
    index (req, res, next) {
        res.render('collections/Index', res.locals.data)
    },
    newView (req, res, next) {
        res.render('collections/New')
    },
    edit (req, res, next) {
        res.render('collections/Edit', res.locals.data)
    },
    show (req, res, next) {
        res.render('collections/Show', res.locals.data)
    },
    redirectHome (req, res, next) {
        res.redirect(RESOURCE_PATH)
    },
    redirectShow (req, res, next) {
        const collectionId = req.params.id || res.locals.data.collection._id
        res.redirect(`${RESOURCE_PATH}/${collectionId}`)
    }
}

module.exports = viewController