import { Alhamsa, Android, ARK, CRM_mang, Custom_soft, Gas_mang, IOS, Job_mang, Landoc, Lapzone, MD, MRM, POS_sys, PWA, SARA_GAS, SDY, SHAM, SP_MED, Tran_mang, Vishnu, Web_application, Website, Windows, Work_mang } from "./assets/Data"



export const what_we_do_list = [
    {
        id: 1,
        img:Android,
        title:'Android',
        para:"Create an impactful mobile app that fits your brand and industry within a shorter time frame." 
    },
    {
        id: 2,
        img:IOS,
        title:'IOS',
        para:"Collaborating with cross-functional teams to define, design, and ship new features." 
    },
    {
        id: 3,
        img:PWA,
        title:'PWA',
        para:"A web app that offers offline access, fast loading, and an app-like experience." 
    },
    {
        id: 4,
        img:Web_application,
        title:'Web Application',
        para:"Our process of website design extends to custom designs and sophisticated web development." 
    },
    {
        id: 5,
        img:Windows,
        title:'Windows Application',
        para:"An application is a software program designed to perform specific tasks or functions for users, typically featuring a user interface for interaction." 
    },
    {
        id: 6,
        img:Website,
        title:'Website Design',
        para:"Website refers to a collection of interconnected web pages hosted on a server, accessible via a unique domain or URL on the internet." 
    },
    
]

export const Our_client = [
    {
        id: 1,
        img:Landoc,
    },
    {
        id: 2,
        img:MRM,
    },
    {
        id: 3,
        img:SDY,
    },
    {
        id: 4,
        img:SHAM,
    },
    {
        id: 5,
        img:SP_MED,
    },
    {
        id: 6,
        img:SARA_GAS,
    },
    {
        id: 7,
        img:Alhamsa,
    },
    {
        id: 8,
        img:ARK,
    },
    {
        id: 9,
        img:Lapzone,
    },
    {
        id: 10,
        img:Vishnu,
    },
    
]

export const serviceslist = [
    {
        id: 1,
        img: Gas_mang,
        title: "Gas Management System",
        para: "The system streamlines business operations by consolidating cylinder order management, customer pricing, sales, and delivery tracking in one platform. It allows for easy price updates, applies customer-specific pricing automatically, and manages stock, returns, and payments with real-time tracking. OTP verification and invoice generation ensure smooth deliveries, while comprehensive expense, purchase, and financial tracking keep operations organized. Staff attendance and task management improve workforce efficiency, and supplier details are seamlessly integrated with procurement processes. The system provides a complete overview of customer, supplier, and financial data, ensuring better decision-making, transparent financial records, and efficient overall management.",
        link:'/product/gas_management'
    },
    {
        id: 2,
        img: Tran_mang,
        title: "Transport Management System",
        para: "The system helps manage various business operations efficiently. It includes modules for handling trips, expenses, vehicle management, supplier payments, and inventory. It tracks details like trip assignments, expenses, and deliveries, while also managing general costs, petty cash, and supplier payments. The system ensures smooth coordination between tasks, products, services, and staff. It also helps organize documents, track vehicles, and manage customer and supplier relationships, making it easier to oversee all aspects of the business from start to finish.",
        link:'/product/tran'
    },
    {
        id: 3,
        img: CRM_mang,
        title: "Customer Relationship Management",
        para: "The CRM Management System helps manage customer inquiries, follow-ups, and quotations with automatic WhatsApp reminders. It tracks leads, sales, customer details, and projects, and allows printing of service records. The system also manages expenses, including payments for general or project costs. It includes features for staff attendance, punch-in/out tracking, and timesheet management. The system handles material issues, transfers, and purchases from suppliers, along with customer payments and outstanding balances. It also manages vouchers, stock adjustments, and integrates various options like categories, products, suppliers, and staff registration.",
        link:'/product/crm'
    },
    {
        id: 4,
        img: Work_mang,
        title: "Work Management System",
        para: "The Work Management System helps streamline tasks and customer interactions. It includes CRM for managing customer details, projects, and project completion. It tracks leads, manages inquiries, and sends reminders via WhatsApp to the admin for follow-ups. The system offers a task management feature with a drag-and-drop Kanban board to track task status (allocated, initiated, in-progress, dropped, completed) with date filters. It allows creating customer, staff, and employee profiles. Daily tasks are managed, assigned, and tracked for progress. The system supports task creation, type assignment, and integration with task management to improve delegation and tracking. Notifications are sent in bulk via WhatsApp, including messages and images, for customer communication.",
        link:'/product/work_managemnt'

    },
    {
        id: 5,
        img: Job_mang,
        title: "Job Management System",
        para: "A work management system helps manage customer inquiries and leads, sending reminders to the admin via WhatsApp. It converts leads into quotations, which are also tracked with WhatsApp reminders. The system then tracks sales, job orders, and the completion of those orders. It includes a complaint management feature, and allows for material issues and transfers to stock maintenance. The CRM also tracks purchases from suppliers, maintaining detailed records of products, quantities, and payment methods to support procurement. Stock adjustments ensure accurate stock details, and the system integrates various options like products, categories, UOM (units of measure), suppliers, enquiry types, quotation types, job orders, status masters, and terms & conditions.",
        link:'/product/job_managemnt'

    },
    {
        id: 6,
        img: POS_sys,
        title: "POS Billing Application",
        para: "Direct Sales streamlines wholesale and retail operations with GST-enabled billing, multiple payment modes, and price/stock management. It supports selling to regular and walk-in customers, tracks history, and allows instant order updates and printing. Sales prices can be customized store-wise or customer-wise. Key modules include deposits, payment collection, purchase management (supplier-wise, bag/kg, rate details), voucher management, expense booking, supplier payments, and stock adjustments. The Master module handles customer/supplier registrations, returns, outstanding payments, staff details, categories, UOM, and expenses. This all-in-one solution ensures efficient management of sales, purchases, payments, and inventory for smooth business operations.",
        link:'/product/pos'

    },
    {
        id: 7,
        img: Custom_soft,
        title: "Customized System",
        para: "We specialize in providing customized software solutions tailored to your business needs, enabling seamless access anytime, anywhere, and on any device. Our solutions include Gas Management Systems, Transport Management Systems, CRM, Work Management Systems, Job Management Systems, and POS Billing Applications. We also develop bespoke systems designed specifically for your business. Leveraging advanced technology, our systems support features such as PDF generation, Excel integration, instant printing, and more, ensuring efficiency and user convenience. Whether you need streamlined operations, enhanced productivity, or robust management tools, our solutions are built to deliver exceptional performance and adaptability to your unique requirements.",
        // link:'/product/customized_system'
    },
]

export const Gas_Details = [
    {
        id: 1,
        title: 'Booking',
        para: "Simplifies managing cylinder orders for customers by handling filled and empty stock, assigning orders to delivery staff, and tracking order progress. Automatically sends OTPs to customers via WhatsApp for confirmation and ensures smooth delivery management.",

    },
    {
        id: 2,
        title: 'Customer Price List',
        para: "Allows easy updates to cylinder prices, including bulk changes and tax adjustments. You can also set specific prices for individual customers, ensuring flexible and accurate pricing for all.",

    },
    {
        id: 3,
        title: 'Sales',
        para: "Automatically applies customer-specific prices during transactions, updates prices dynamically, and ensures adjustments are made post-delivery. This ensures seamless sales operations and accurate billing for every order.",

    },
    {
        id: 4,
        title: 'Delivery',
        para: "Tracks orders in real-time, ensures deliveries are completed upon OTP verification, and provides instant invoice printing. Multiple payment modes are supported to simplify customer transactions.",

    },
    {
        id: 5,
        title: 'Sales Return',
        para: "Handles returns by managing the returned quantity and adjusting the corresponding amount. This ensures accurate stock and financial records.",

    },
    {
        id: 6,
        title: 'Collection Handover',
        para: "Enables the collection of payments from customers, verifies them individually, and ensures proper recording of transactions for seamless account management.",

    },
    {
        id: 7,
        title: 'Deposit',
        para: "Helps maintain and organize deposit records, ensuring transparency and accuracy in tracking customer and company deposits.",

    },
    {
        id: 8,
        title: 'Payment Collection',
        para: "Streamlines the process of updating payments received from customers and adjusts their outstanding balances accordingly for better financial control.",

    },
    {
        id: 9,
        title: 'Withdrawal',
        para: "Facilitates the management and documentation of withdrawal transactions, ensuring proper records and transparency.",

    },
    {
        id: 10,
        title: 'Bank Clearance',
        para: "Manages purchases from suppliers, including detailed records of products, quantities, and payment methods, supporting seamless procurement processes.",

    },
    {
        id: 11,
        title: 'Purchase',
        para: "Simplifies bank clearance processes, ensuring accurate tracking of payments and financial transactions with detailed records.",

    },
    {
        id: 12,
        title: 'Stock Transfer',
        para: "Efficiently handles the transfer of stock between multiple locations, ensuring accurate updates and tracking of quantities.",

    },
    {
        id: 13,
        title: 'Stock Adjustment',
        para: "Enables stock corrections and updates for both filled and empty cylinders, location-wise, ensuring precise inventory management.",

    },
    {
        id: 14,
        title: 'Expense Booking',
        para: "Allows easy recording of all types of expenses, with support for multiple payment methods to keep financial records organized.",

    },
    {
        id: 15,
        title: 'Staff Attendance',
        para: "Tracks employee in-time and out-time, ensuring accurate attendance records and effective workforce management.",

    },
    {
        id: 15,
        title: 'Empty Cylinder Collection',
        para: "Manages the collection of empty cylinders from customers, keeping detailed records of both filled and empty stock.",

    },
    {
        id: 16,
        title: 'Voucher',
        para: "Updates financial account details, customer outstanding balances, and provides a clear overview of all financial transactions.",

    },
    {
        id: 17,
        title: 'Task Management',
        para: "Facilitates assigning tasks to teams or individuals, tracking their progress, and closing tasks upon completion, ensuring efficient operations.",

    },
    {
        id: 18,
        title: 'Supplier Payment',
        para: "Records payments made to suppliers, tracks payment histories, and supports multiple payment modes for hassle-free supplier management.",

    },
    {
        id: 19,
        title: 'Product Management',
        para: "The product module enables efficient management of products, seamlessly integrating with booking, purchase, and stock details. It ensures streamlined inventory control and accurate tracking of product-related data for better operational efficiency.",

    },
    {
        id: 20,
        title: 'Customer Registration',
        para: "This feature facilitates managing customer information, including basic details, while integrating with booking and outstanding balance. It ensures smooth handling of customer interactions and financial tracking.",

    },
    {
        id: 21,
        title: 'Staff Registration',
        para: "The staff module allows for comprehensive employee management, including data tracking and monitoring employee records, ensuring efficient workforce administration.",

    },
    {
        id: 22,
        title: 'Supplier  Registration',
        para: "This module streamlines supplier management by integrating supplier details with purchase operations, enhancing procurement processes and supplier relationship management.",

    },
    {
        id: 23,
        title: 'Area Management',
        para: "The area module links customer areas to bookings, enabling efficient area organization and better service delivery.",

    },
    {
        id: 24,
        title: 'General Ledger',
        para: "The general ledger module ensures accurate and efficient financial tracking, offering robust management of accounting ledgers to support seamless financial operations.",

    },
    {
        id: 25,
        title: 'Expense Management',
        para: "The expense master captures unique expenses and integrates them into the accounting ledger. It is particularly beneficial for booking daily expenses, ensuring accurate financial records and better cost management.",

    },
]

export const Tran_Details = [
    {
        id: 1,
        title: 'Trip Management',
        para: "This module facilitates the entire trip management process, from start to finish. It covers customer trip details, including the allocation of drivers and vehicles, and provides an efficient way to manage trip expenses, including multiple modes of payment and item details."
    },
    {
        id: 2,
        title: 'Trip Expense',
        para: "This module helps track and manage expenses related to trips, including booking expenses with specific suppliers. It enables detailed tracking of trip-wise expenses, allowing for multiple modes of payment and clear expense management for each trip."
    },
    {
        id: 3,
        title: 'General Expense',
        para: "This module handles the booking of general expenses, specifically for vehicle-related costs. It provides a system for managing various vehicle expenses, including the use of multiple modes of payment to ensure proper financial documentation."
    },
    {
        id: 4,
        title: 'Purchase',
        para: "This module facilitates the purchase of products from suppliers for specific locations. It tracks product and quantity details, helping businesses manage their inventory and supplier relationships effectively for smooth operations."
    },
    {
        id: 5,
        title: 'Delivery Completion',
        para: "This module allows users to update the status of deliveries, marking them as completed. It ensures accurate tracking of deliveries, helping businesses manage their logistics and customer satisfaction efficiently."
    },
    {
        id: 6,
        title: 'Trip Completion',
        para: "This module is designed to update the completion status of trips. It tracks the trip details and associated expenses, recording the mode of payment to ensure complete financial and operational transparency at the end of each trip."
    },
    {
        id: 7,
        title: 'Deposit',
        para: "This module helps organize and track deposit records, ensuring that both customer and company deposits are managed accurately. It provides transparency and ensures proper documentation for all deposit-related activities."
    },
    {
        id: 8,
        title: 'Petty Cash',
        para: "The Petty Cash module allows for the management of small, day-to-day expenses for trips and general activities. It provides an efficient way to track and organize petty cash, ensuring financial clarity in both trip and general operations."
    },
    {
        id: 9,
        title: 'Supplier Payment',
        para: "This module is designed to track and manage payments to suppliers. It ensures that supplier payment details are recorded accurately, allowing for proper financial control and ensuring timely payments."
    },
    {
        id: 10,
        title: 'Task Management System',
        para: "The Task Management System helps assign tasks to teams or individuals, track progress, and close tasks upon completion. It promotes operational efficiency by streamlining task delegation and progress tracking."
    },
    {
        id: 11,
        title: 'Voucher',
        para: "The Voucher Management module handles all financial transactions related to vouchers. It ensures accurate record-keeping, providing an efficient way to manage voucher-related activities and ensuring compliance with financial protocols."
    },
    {
        id: 12,
        title: 'Stock Adjustment',
        para: "This module allows businesses to make adjustments to their stock and inventory. It ensures that quantity details are accurately maintained, helping businesses keep their stock records up-to-date and prevent discrepancies."
    },
    {
        id: 13,
        title: 'Material Registration',
        para: "This module helps manage product details and integrates with Trip Management, Purchase, Expense, and Stock systems, making product tracking and procurement more efficient."
    },
    {
        id: 14,
        title: 'Vehicle Registration',
        para: "Manages vehicle details and integrates with Trip Management to ensure smooth scheduling and tracking of vehicles for business use."
    },
    {
        id: 15,
        title: 'Expense Management',
        para: "Tracks both trip and general expenses. It integrates with booking systems to monitor costs and streamline approval and reimbursement processes."
    },
    {
        id: 14,
        title: 'Location Management',
        para: "Helps manage location details and integrates with Trip Management to ensure accurate travel planning and logistics coordination."
    },
    {
        id: 15,
        title: 'Service Category',
        para: "Manages vehicle services and integrates with Trip Management to ensure vehicles are well-maintained and ready for use."
    },
    {
        id: 16,
        title: 'Vehicle Type',
        para: "Manages different vehicle types and integrates with Vehicle Registration to ensure the right vehicles are used for the right trips."
    },
    {
        id: 17,
        title: 'Document Management',
        para: "Organizes and stores important documents such as contracts and agreements, making them easy to access and manage securely."
    },
    {
        id: 18,
        title: 'Trip Type',
        para: "Manages different trip categories and integrates with Trip Management to organize trips based on type, improving trip planning and coordination."
    },
    {
        id: 19,
        title: 'Supplier Management',
        para: "Streamlines supplier management and integrates with purchase operations, improving supplier relationships and procurement processes."
    },
    {
        id: 20,
        title: 'General Ledger',
        para: "Keeps track of all financial transactions, ensuring accurate financial records and supporting smooth financial operations."
    },
    {
        id: 21,
        title: 'Category and UOM',
        para: "Manages product categories and units of measurement (UOM), integrating with Trip Management to ensure accurate product tracking."
    },
    {
        id: 22,
        title: 'Staff Registration',
        para: "Manages employee records and tracks personnel data, ensuring efficient workforce management."
    },
    {
        id: 23,
        title: 'Customer Management',
        para: "Manages customer information and integrates with Trip Management to offer personalized services and improve customer satisfaction."
    },
    {
        id: 24,
        title: 'Task User Creation and Task Type',
        para: "Helps assign and manage tasks for users and integrates with Task Management for efficient task tracking and delegation."
    },
]

export const Crm_Details = [
    {
        id:1,
        title: 'Lead Management',
        para:"The Lead module manages leads and enquiries by storing customer details, the Scope of Work, and follow-up timings. It integrates a WhatsApp reminder system for admins to track follow-ups and update leads. Leads progress into quotations, ensuring smooth transitions and status updates with reminders for timely actions."
    },
    {
        id:2,
        title: 'Quotation Management',
        para:"The Quotation module manages quotations by capturing customer details and the Scope of Work. It allows setting follow-up timings, tracking status, and using WhatsApp reminders for admins to manage and complete quotations efficiently, ensuring streamlined operations and customer satisfaction."
    },
    {
        id:3,
        title: 'CRM',
        para:"The CRM module stores customer details and tracks project information, including user assignments, project progress, and completion details. It ensures seamless customer and project management, providing visibility into project lifecycle stages and facilitating efficient operations."
    },
    {
        id:4,
        title: 'Notifications',
        para:"The Notification module enables sending bulk images and messages to customers. It supports efficient communication and engagement, enhancing customer interaction through personalized and timely updates."
    },
    {
        id:5,
        title: 'Task Management',
        para:"The Task Management System streamlines task delegation by assigning tasks to teams or individuals, tracking progress, and ensuring task closure. It enhances operational efficiency through transparent tracking and accountability, promoting better team performance."
    },
    {
        id:6,
        title: 'Quotation Type',
        para:"The Quotation Type module defines and categorizes quotation types, integrating with the Quotation system. This facilitates the organization and management of diverse quotation requirements, enhancing operational efficiency."
    },
    {
        id:7,
        title: 'Status Master',
        para:"The Status Master module maintains the status of leads and quotations, integrating with both modules. It ensures clear tracking of progress and supports informed decision-making for lead and quotation management."
    },
    {
        id:8,
        title: 'Lead Source',
        para:"The Lead Source module identifies and integrates the source of leads into the Lead and Quotation systems. This aids in tracking and analyzing lead origins for better strategy planning."
    },
    {
        id:9,
        title: 'Scope of Work',
        para:"The Scope of Work module integrates with leads and quotations, defining project requirements and ensuring clarity in customer interactions. It supports precise project planning and execution."
    },
    {
        id:10,
        title: 'Task User Creation and Task Type',
        para:"This module manages user assignments and task types, integrating with Task Management. It ensures efficient task tracking and delegation, promoting accountability and streamlined operations."
    },
]

export const Job_details = [
    {
        id:1,
        title: 'Lead Management',
        para:"The Lead module handles leads and enquiries by storing customer details, scope of work, and follow-up schedules. It integrates with a WhatsApp reminder system to notify admins managing leads. Status updates and quotations are seamlessly tracked, ensuring efficient lead conversion and streamlined communication."
    },
    {
        id:2,
        title: 'Quotation Management',
        para:"The Quotation module manages customer details, scope of work, and quotation status. It supports follow-up scheduling and integrates WhatsApp reminders for timely updates. Admins can oversee the quotation process, ensuring completion and accurate tracking of progress to enhance customer engagement and operational efficiency."
    },
    {
        id:3,
        title: 'Job Order Management',
        para:"The Job Order module facilitates job creation with customer and scope of work details. It allows follow-up scheduling, status updates, and integrates WhatsApp reminders for real-time task management. This ensures smooth execution and tracking of job orders, enhancing productivity and communication."
    },
    {
        id:4,
        title: 'Complaint Management',
        para:"The Complaint module records customer complaints with detailed logs. It includes follow-up schedules, status tracking, and WhatsApp reminders for admins. This ensures prompt resolution and efficient complaint management, fostering better customer satisfaction and streamlined workflows."
    },
    {
        id:5,
        title: 'Purchase Management',
        para:"The Purchase module manages supplier details and product purchases, including quantity and GST requirements. It supports tracking and record-keeping for seamless procurement processes and integrates essential supplier data for efficient operational management."
    },
    {
        id:6,
        title: 'Material Transfer Management',
        para:"The Material Transfer module enables tracking of product transfers between locations. It logs product and quantity details to maintain accurate inventory records, ensuring efficient resource allocation and material tracking."
    },
    {
        id:7,
        title: 'Material Issue Management',
        para:"The Material Issue module tracks product issues with detailed records of products and quantities. This supports streamlined inventory management and ensures accurate reporting for operational efficiency."
    },
    {
        id:8,
        title: 'Product Management',
        para:"The Product module integrates with Job Order, Complaint, Material Transfer, and Material Issue modules to maintain detailed product records. It supports effective product tracking and management across operations."
    },
    {
        id:9,
        title: 'Category and UOM Management',
        para:"The Category and Unit of Measure (UOM) module integrates with product creation, ensuring accurate categorization and measurement for streamlined product management."
    },
    {
        id:10,
        title: 'Supplier Management',
        para:"The Supplier module stores basic supplier details, integrated with the Purchase module. This ensures efficient supplier tracking and smooth procurement processes."
    },
    {
        id:11,
        title: 'Enquiry Type Management',
        para:"The Enquiry Type module categorizes and integrates enquiry types within the Enquiry system. This enhances clarity and efficiency in handling leads, supporting better lead management processes."
    },
    {
        id:12,
        title: 'Quotation Type Management',
        para:"The Quotation Type module categorizes and integrates quotation types with the Quotation system. It streamlines organization and ensures efficient handling of diverse quotation needs for operational effectiveness."
    },
    {
        id:13,
        title: 'Status Master',
        para:"The Status Master module tracks the status of leads and quotations. It integrates seamlessly with both modules, providing clarity and supporting informed decision-making for effective progress tracking."
    },
    {
        id:14,
        title: 'Terms & Conditions Management',
        para:"The Terms & Conditions module supports creating and managing terms and conditions, integrating with the Quotation module. This ensures consistent documentation and enhances the efficiency of quotation creation."
    },
]

export const Work_Details = [
    {
        id:1,
        title: 'CRM',
        para:"The CRM module provides essential tools to manage basic customer details along with project information and project completion status. It streamlines customer interactions and ensures that project details are well-organized for efficient tracking, enabling seamless coordination between customer information and project management."
    },
    {
        id:2,
        title: 'Lead Management',
        para:"This module manages leads and enquiries by storing basic customer details, scope of work, follow-up timings, and status updates. It includes a WhatsApp reminder system for admins to track follow-ups, manage leads, and update quotations, ensuring timely and organized lead handling."
    },
    {
        id:3,
        title: 'Quotation Management',
        para:"The Quotation module manages quotations with customer details, scope of work, and follow-up schedules. Integrated WhatsApp reminders for admins streamline tracking and updating quotations, enhancing operational efficiency. The system ensures timely quotation completion with automated reminders, supporting effective communication with clients."
    },
    {
        id:4,
        title: 'Work Management',
        para:"Work Management organizes tasks by customer and project. It uses a Kanban board with drag-and-drop features for status updates like Task Allocated, Initiated, In-Progress, Dropped, and Completed. Filters for customers, dates, in-charge, and priority ensure a user-friendly experience, supporting efficient task handling."
    },
    {
        id:5,
        title: 'Daily Task Management',
        para:"This module tracks daily tasks, ensuring completion and generating detailed reports. It provides information on project heads, task priorities, and timelines. By maintaining structured task details, it improves accountability and helps teams achieve timely completion of daily objectives."
    },
    {
        id:6,
        title: 'Notifications',
        para:"The Notifications module enables bulk messaging and image sharing with customers. It enhances communication by sending personalized updates and reminders, ensuring timely engagement and strengthening customer relationships through effective and efficient communication."
    },
    {
        id:7,
        title: 'Task Management system',
        para:"This system simplifies task delegation by assigning tasks to individuals or teams and tracking their progress until closure. It integrates transparency, accountability, and operational efficiency, allowing for better team performance through clear task tracking and streamlined processes."
    },
    {
        id:8,
        title: 'Enquiry Type',
        para:"The Enquiry Type module categorizes various enquiry types for efficient lead management. It integrates seamlessly into the system, ensuring clarity and proper handling of diverse enquiries, which supports structured and effective enquiry tracking."
    },
    {
        id:9,
        title: 'Quotation Type',
        para:"This module organizes and categorizes quotation types for efficient handling. It integrates with the quotation system to ensure streamlined management of diverse quotation requirements, enhancing operational organization and effectiveness."
    },
    {
        id:10,
        title: 'Status Master',
        para:"The Status Master module tracks and integrates the statuses of leads and quotations. It provides real-time clarity on progress, supporting informed decisions and enhancing efficiency in tracking and managing lead and quotation workflows."
    },
    {
        id:11,
        title: 'Task User Creation and Task Type Management',
        para:"This module facilitates user assignments and task type categorization within the task management system. It supports efficient task delegation, tracking, and accountability, promoting streamlined operations and effective collaboration among teams."
    },
]

export const POS_details = [
    {
        id:1,
        title:'Direct Sales',
        para:"The Direct Sales module facilitates the sale of retail and wholesale products, including product images, prices, stock details, and the option to mark favorite items. It also calculates GST and net amounts and supports multiple payment methods for both walk-in and registered customers, providing a complete sales history for future reference."
    },
    {
        id:2,
        title:'View/Update Orders',
        para:"This feature enables users to view and update customer orders, displaying details such as customer information and outstanding balances. Users can also instantly print invoices or receipts with the updated information, providing a seamless process for managing customer transactions and payments."
    },
    {
        id:3,
        title:'Store Wise Sales Price',
        para:"The Store Wise Sales Price module allows bulk updates of sales prices across various stores, ensuring that pricing remains consistent and up to date. This feature streamlines price adjustments, improving the overall efficiency of price management across multiple store locations."
    },
    {
        id:4,
        title:'Customer Wise Sales Price',
        para:"This module enables bulk updates of sales prices specific to individual customers. It supports the modification of taxable amounts, ensuring accurate pricing tailored to each customer’s needs. This function ensures better customization and more accurate financial management when dealing with different customers."
    },
    {
        id:5,
        title:'Deposit',
        para:"The Deposit module helps track and manage customer and company deposits, ensuring accurate and transparent records. It assists businesses in keeping a clear and organized view of deposit transactions, maintaining transparency and proper record-keeping in financial activities."
    },
    {
        id:6,
        title:'Payment Collection',
        para:"Payment Collection simplifies the process of recording payments received from customers and automatically adjusts outstanding balances. This feature helps businesses maintain financial control by ensuring that all customer payments are accurately recorded and balances are updated in real-time."
    },
    {
        id:7,
        title:'Purchase',
        para:"The Purchase module manages procurement from suppliers, including recording supplier details, product quantities, and payment methods. This function streamlines the purchasing process and ensures seamless inventory management and timely procurement of goods from suppliers."
    },
    {
        id:8,
        title:'Purchase Price',
        para:"The Purchase Price module allows users to update product prices, ensuring that the prices of purchased items remain accurate and reflective of market changes. This feature helps maintain proper price adjustments and enhances cost management strategies within procurement."
    },
    {
        id:9,
        title:'Voucher',
        para:"Voucher management updates financial account details and customer outstanding balances. This feature offers a comprehensive overview of financial transactions, ensuring that businesses can efficiently track account details, manage customer balances, and maintain an organized financial system."
    },
    {
        id:10,
        title:'Expense Booking',
        para:"Expense Booking provides a convenient way to record various business expenses, supporting multiple payment methods. This module helps maintain organized and accurate financial records, ensuring that all business expenditures are accounted for and tracked in a streamlined manner."
    },
    {
        id:11,
        title:'Supplier Payment',
        para:"Supplier Payment tracks and manages payments made to suppliers. This module ensures that payment details are recorded accurately, allowing businesses to maintain financial control and ensure timely payments to suppliers, preventing delays or discrepancies in procurement processes."
    },
    {
        id:12,
        title:'Stock Adjustment',
        para:"The Stock Adjustment module allows businesses to make corrections and updates to product inventories, ensuring accurate and up-to-date stock records. This feature is essential for maintaining precise inventory levels and resolving discrepancies between actual and recorded stock counts."
    },
    {
        id:13,
        title:'Payment Modification',
        para:"Payment Modification enables businesses to modify payment records for accurate financial tracking. This module ensures that any changes in payment amounts or details are updated correctly, helping businesses maintain accurate and reliable financial records."
    },
    {
        id:14,
        title:'Customer Registration',
        para:"Customer Registration provides a simple process for capturing basic customer information, streamlining customer onboarding. Integrated with the sales system, this module helps businesses maintain up-to-date customer records and ensures seamless transactions across various platforms."
    },
    {
        id:15,
        title:'Product',
        para:"The Product module enables businesses to create and manage products, integrating with sales, purchase, and stock management systems. This module streamlines product handling, ensuring accurate records for stock adjustments, purchases, and sales transactions."
    },
    {
        id:16,
        title:'Supplier Registration',
        para:"Supplier Registration streamlines the process of adding supplier details to the system, enhancing supplier management. Integrated with purchase operations, this module helps businesses maintain accurate supplier records, improving procurement processes and supplier relationships."
    },
    {
        id:17,
        title:'Supplier Area',
        para:"The Supplier Area module organizes and categorizes suppliers based on geographic or service regions. Integrated with Supplier Registration and Supplier Payment, this feature enhances supplier management and ensures that payments and procurement processes are streamlined and region-specific."
    },
    {
        id:18,
        title:'Category, UOM',
        para:"The Category and Unit of Measure (UOM) module ensures products are properly categorized and measured. This integration with product creation ensures that all products are appropriately classified, supporting streamlined management, inventory tracking, and reporting across various product types and units."
    },
    {
        id:19,
        title:'Expense',
        para:"The Expense module provides a structured way to record business expenses, integrating with the expense booking system. This helps ensure that all costs are documented accurately, supporting better financial tracking and management for long-term business sustainability."
    },
]

// export const CUST_Details = [
//     {
//         id:1,
//         title:'Innovative and Reliable Software Solutions for Businesses',
//         para:"In today’s fast-paced digital world, businesses require innovative and reliable solutions to stay ahead. We specialize in delivering customized software solutions tailored to your unique needs. Whether you need efficient gas management, streamlined transportation systems, or robust customer relationship management (CRM) tools, we’ve got you covered."
//     },
//     {
//         id:2,
//         title:'Access Anytime, Anywhere, on Any Device',
//         para:"Our software solutions are designed with accessibility in mind. You can easily use our systems anytime and from anywhere, whether you’re on a desktop, tablet, or mobile device. This ensures seamless operations and convenience, empowering your business to function smoothly without geographical or device limitations."
//     },
//     {
//         id:3,
//         title:'Comprehensive Solutions for Every Business Need',
//         para:"In today’s fast-paced digital world, businesses require innovative and reliable solutions to stay ahead. We specialize in delivering customized software solutions tailored to your unique needs. Whether you need efficient gas management, streamlined transportation systems, or robust customer relationship management (CRM) tools, we’ve got you covered."
//     },
//     {
//         id:1,
//         title:'Innovative and Reliable Software Solutions for Businesses',
//         para:"In today’s fast-paced digital world, businesses require innovative and reliable solutions to stay ahead. We specialize in delivering customized software solutions tailored to your unique needs. Whether you need efficient gas management, streamlined transportation systems, or robust customer relationship management (CRM) tools, we’ve got you covered."
//     },
// ]

export const OurTeamData = [
    {
        id: 1,
        img: MD,
        profession: "MANAGING DIRECTOR",
        name: "Aneesdeen",
        content: (
            <>
                <span>
                    &nbsp;&nbsp;&nbsp;Mr. Aneesdeen, armed with a Master of Science in Information Technology attained in 2007,
                    embarked on his professional journey in 2008 as a software developer in the dynamic landscape
                    of the Middle East.
                </span>
                <br />
                <br />
                <span>
                    &nbsp;&nbsp;&nbsp;Over the years, he has seamlessly transitioned through various pivotal roles, including
                    technical team leader, software team leader, and solution manager. With a wealth of experience
                    spanning over a decade, Aneesdeen has honed his expertise in Enterprise Resource Planning
                    (ERP) systems and Software Development Life Cycle (SDLC) methodologies across a diverse array
                    of industries.
                </span>
                <br />
                <br />
                <span>
                    &nbsp;&nbsp;&nbsp;His adeptness in navigating the intricacies of ERP implementation and management has
                    contributed to the operational efficiency and growth of numerous organizations.
                </span>
                <br />
                <br />
                <span>
                    &nbsp;&nbsp;&nbsp;In 2023, leveraging his extensive industry knowledge and visionary outlook, Aneesdeen embarked
                    on a new chapter in his professional odyssey by founding KN GLOBAL INFO TECH, a testament to
                    his entrepreneurial spirit and commitment to driving innovation in the technological sphere.
                </span>
                <br />
                <br />
                <span>
                    &nbsp;&nbsp;&nbsp;Under his guidance, KN GLOBAL INFO TECH continues to thrive as a beacon of innovation,
                    delivering cutting-edge solutions that empower businesses to transcend boundaries and achieve
                    their full potential.
                </span>
            </>
        ),
    },
];