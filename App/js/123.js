xui.Class('App.ColumnsNone25', 'xui.Module',{
    Instance:{
        iniComponents : function(){
            // [[Code created by CrossUI RAD Studio
            var host=this, children=[], append=function(child){children.push(child.get(0));};
            
            append(
                xui.create("xui.UI.Div")
                .setHost(host,"ctl_pane10")
                .setDock("fill")
            );
            
            host.ctl_pane10.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_comboinput23")
                .setLeft("23.61904761904762em")
                .setTop("11.428571428571429em")
                .setWidth("18em")
                .setLabelSize("8em")
                .setLabelCaption("Counter")
                .setType("counter")
            );
            
            return children;
            // ]]Code created by CrossUI RAD Studio
        }
    }
});