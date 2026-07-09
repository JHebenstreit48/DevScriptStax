import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const SecurityPractices = () => {
  const markdownFilePath = 'Tools/CodeQuality/ESLint/Advanced/QualityAndSecurity/SecurityPractices';

  return (
    <>
      <PageLayout>
        <PageTitle title="Security Practices" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default SecurityPractices;
