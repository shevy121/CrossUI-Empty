// The default code is a module class (inherited from xui.Module)
// Ensure that all the value of "key/value pair" does not refer to external variables
xui.Class('App', 'xui.Module',{
    Instance:{
        // Dependency classes
        Dependencies:[],
        // Required modules
        Required:[],

        // To initialize properties
        properties : {},

        // To initialize instance(e.g. properties)
        initialize : function(){
        },

        // To initialize internal components (mostly UI controls)
        // *** If you're not a skilled, dont modify this function manually ***
        iniComponents : function(){
            // [[Code created by CrossUI RAD Studio
            var host=this, children=[], append=function(child){children.push(child.get(0));};
            
            append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input5")
                .setLeft("16.761904761904763em")
                .setTop("7.619047619047619em")
                .setWidth("19.504761904761907em")
                .setHeight("3.123809523809524em")
                .setLabelSize("8em")
                .setLabelCaption("Sender")
                .setMultiLines(true)
            );
            
            append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input12")
                .setLeft("16.761904761904763em")
                .setTop("12.952380952380953em")
                .setWidth("19.504761904761907em")
                .setHeight("3.123809523809524em")
                .setLabelSize("8em")
                .setLabelCaption("Receiver")
                .setMultiLines(true)
            );
            
            append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input13")
                .setLeft("16.761904761904763em")
                .setTop("18.285714285714285em")
                .setWidth("23.314285714285713em")
                .setHeight("8.457142857142857em")
                .setLabelSize("8em")
                .setLabelCaption("Message")
                .setMultiLines(true)
            );
            
            append(
                xui.create("xui.UI.Button")
                .setHost(host,"xui_ui_button6")
                .setLeft("28.19047619047619em")
                .setTop("32em")
                .setWidth("5.257142857142857em")
                .setHeight("2.8190476190476192em")
                .setCaption("Send")
                .onClick([
                    {
                        "desc" : "Action 1",
                        "type" : "page",
                        "target" : "App.123",
                        "args" : [true],
                        "method" : "switch",
                        "event" : 1
                    },
                    "_xui_ui_button6_onclick"
                ])
            );
            
            return children;
            // ]]Code created by CrossUI RAD Studio
        },

        // Give a chance to determine which UI controls will be appended to parent container
        customAppend : function(parent, subId, left, top){
            // "return false" will cause all the internal UI controls will be added to the parent panel
            return false;
        },
        /**
         * Fired when user click it
         * @method onClick [xui.UI.Button event]
         * @param {xui.UIProfile.} profile  The current control's profile object
         * @param {Event} e , Dom event object
         * @param {Element.xui} src  id or Dom Element
         * @param {} value  Object
        */
        _xui_ui_button6_onclick:function(profile, e, src, value){
            var ns = this, uictrl = profile.boxing();
        }
        /*,
        // To determine how properties affects this module
        propSetAction : function(prop){
        },
        // To set all node's style in this modlue
        customStyle:{}
    },
    //To customize the default properties and event handlers
    Static:{
        $DataModel:{
        },
        $EventHandlers:{
        }
    */
    }
});