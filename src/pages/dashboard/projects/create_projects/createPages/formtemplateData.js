const items = [
           {
            id: "14B4B906-5C02-4888-BB2A-A93D2DD007A3",
            element: "Header",
            text: "Header Text",
            static: true,
            required: false,
            showDescription: undefined,
            bold: false,
            italic: false,
            content: "Placeholder text...",
            canHavePageBreakBefore: true,
            canHaveAlternateForm: true,
            canHaveDisplayHorizontal: true,
            inline: undefined,
            canHaveOptionCorrect: true,
            canHaveOptionValue: true,
            canPopulateFromApi: true,
        },
        {
            id: "F5CB9333-CF6E-47C9-8F51-2227B72CC08F",
            element: "TextInput",
            text: "Text Input",
            static: undefined,
            required: false,
            showDescription: undefined,
            canHaveAnswer: true,
            canHavePageBreakBefore: true,
            canHaveAlternateForm: true,
            canHaveDisplayHorizontal: true,
            inline: undefined,
            canHaveOptionCorrect: true,
            canHaveOptionValue: true,
            canPopulateFromApi: true,
            field_name: "text_input_2C173546-2A71-4D1E-A359-05147ED81432",
            label: "Text label",
        },
        {
            id: "56308736-0722-45C0-AD01-46E0F5DDC59F",
            element: "TextArea",
            text: "Multi-line Input",
            static: undefined,
            required: false,
            showDescription: undefined,
            canHaveAnswer: true,
            canHavePageBreakBefore: true,
            canHaveAlternateForm: true,
            canHaveDisplayHorizontal: true,
            inline: undefined,
            canHaveOptionCorrect: true,
            canHaveOptionValue: true,
            canPopulateFromApi: true,
            field_name: "text_area_8BD526A7-C328-43AE-90DE-C096E380C186",
            label: "Multiline Input",
        },
        {
            id: "59ABCAD7-1DDF-418B-BAB6-93054C1DB915",
            element: "NumberInput",
            text: "Number Input",
            static: undefined,
            required: false,
            showDescription: undefined,
            canHaveAnswer: true,
            canHavePageBreakBefore: true,
            canHaveAlternateForm: true,
            canHaveDisplayHorizontal: true,
            inline: undefined,
            canHaveOptionCorrect: true,
            canHaveOptionValue: true,
            canPopulateFromApi: true,
            field_name: "number_input_6BFC184C-F0F6-446B-9DB3-1C9CE312C926",
            label: "Number",
        },
        {
            id: "0770E744-3DF5-4006-AD1E-8319F3C8BC95",
            element: "Tags",
            text: "Tags",
            static: undefined,
            required: false,
            showDescription: undefined,
            canHaveAnswer: true,
            canHavePageBreakBefore: true,
            canHaveAlternateForm: true,
            canHaveDisplayHorizontal: true,
            inline: undefined,
            canHaveOptionCorrect: true,
            canHaveOptionValue: true,
            canPopulateFromApi: true,
            field_name: "tags_ACD0C107-98D1-4E58-B99D-A0B4C5E8BFA0",
            label: "Placeholder label",
            options: [
                {
                    value: "Tag 1",
                    text: "Tag Option 1",
                    key: "tags_option_4A820631-4817-49F8-B5C5-25BD2E3C0FAF",
                    label: "Tag Option 1",
                    correct: true,
                },
                {
                    value: "Tag 2",
                    text: "Tag Options 2",
                    key: "tags_option_B2C8F549-D07F-485D-AA97-A633AC5D7D4D",
                    label: "Tag Option 2",
                    correct: true,
                },
                {
                    value: "Tag 3",
                    text: "Tag Options 3",
                    key: "tags_option_4CCCB3CC-29A0-40A7-91F2-70277F74F7F0",
                    label: "Tag Option 3",
                    correct: true
                }
            ],
        },
        // {
        //     id: "82AA8E42-022F-42E1-AA76-DFFDC2A74029",
        //     element: "Dropdown",
        //     text: "Dropdown",
        //     static: undefined,
        //     required: false,
        //     showDescription: undefined,
        //     canHaveAnswer: true,
        //     canHavePageBreakBefore: true,
        //     canHaveAlternateForm: true,
        //     canHaveDisplayHorizontal: true,
        //     inline: undefined,
        //     canHaveOptionCorrect: true,
        //     canHaveOptionValue: true,
        //     canPopulateFromApi: true,
        //     field_name: "dropdown_5B81265F-F0B4-483A-A4DC-CB8DF9C63A65",
        //     label: "Placeholder label",
        //     options: [
        //         {
        //             value: "Dropdown Value 1",
        //             text: "Dropdown Option 1",
        //             key: "dropdown_option_6D4A135B-E259-473D-83D2-04DD025030EE"
        //         },
        //         {
        //             value: "Dropdown Value 2",
        //             text: "Dropdown Option 2",
        //             key: "dropdown_option_4678D8D6-A77D-4F5A-A7F7-2045C2451C35"
        //         },
        //         {
        //             value: "Dropdown Value 3",
        //             text: "Dropwdown Option 3",
        //             key: "dropdown_option_F8BE93FE-58CC-4DDA-A468-9836B219F0D7"
        //         }
        //     ],
        // },
        {
            id: "0B977E79-F6BF-4950-AB67-9D299C864EE1",
            element: "Rating",
            text: "Rating",
            static: undefined,
            required: false,
            showDescription: undefined,
            canHaveAnswer: true,
            canHavePageBreakBefore: true,
            canHaveAlternateForm: true,
            canHaveDisplayHorizontal: true,
            inline: undefined,
            canHaveOptionCorrect: true,
            canHaveOptionValue: true,
            canPopulateFromApi: true,
            field_name: "rating_3B779AA1-40E6-4682-8B9B-505169863A7B",
            label: "Rating label",
        },
        {
            id: "7E08B904-D26C-46C9-9325-915D6D854EF8",
            element: "RadioButtons",
            text: "Multiple Choice",
            static: undefined,
            required: false,
            showDescription: undefined,
            canHaveAnswer: true,
            canHavePageBreakBefore: true,
            canHaveAlternateForm: true,
            canHaveDisplayHorizontal: true,
            inline: undefined,
            canHaveOptionCorrect: true,
            canHaveOptionValue: true,
            canPopulateFromApi: true,
            field_name: "radiobuttons_6D613C02-1BE4-494E-A50E-573ADC475E44",
            label: "Placeholder label",
            options: [
                {
                    value: "Multi-choice 1",
                    text: "Multichoice option 1",
                    key: "radiobuttons_option_D527B155-9F81-4E93-B58C-2C9EDB397812"
                },
                {
                    value: "Multi-choice 2",
                    text: "Multichoice option 2",
                    key: "radiobuttons_option_ABB91DD1-0135-4BA9-A843-978A5C6FBA2A"
                },
                {
                    value: "Multi-choice option 3",
                    text: "Multi-choice option  3",
                    key: "radiobuttons_option_697DDCB4-1F52-4F13-92AA-C8F712C49AB0"
                }
            ]
        },
        {
            id: "491ECD3D-0DE4-4528-ADD3-A29239DB3CE9",
            element: "EmailInput",
            text: "Email",
            static: undefined,
            required: false,
            showDescription: undefined,
            canHaveAnswer: true,
            canHavePageBreakBefore: true,
            canHaveAlternateForm: true,
            canHaveDisplayHorizontal: true,
            inline: undefined,
            canHaveOptionCorrect: true,
            canHaveOptionValue: true,
            canPopulateFromApi: true,
            field_name: "email_input_8CA31460-8697-42A8-8797-9AD77C3FE108",
            label: "E-Mail",
        }
];

export default items;