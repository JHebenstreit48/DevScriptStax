import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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
