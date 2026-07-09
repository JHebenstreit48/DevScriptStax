import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const SecurityRulesAndAccessControl = () => {
  const markdownFilePath = 'BackEnd/Databases/Firebase/Basics/Storage/SecurityRulesAndAccessControl';

  return (
    <>
      <PageLayout>
        <PageTitle title="Security Rules & Access Control" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default SecurityRulesAndAccessControl;
