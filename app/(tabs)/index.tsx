import { Image, Linking, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';

export default function CVPage() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#0f0f14' }}>
      <ScrollView contentContainerStyle={styles.container}>
        <Image
          source={require('../../assets/images/sg.jpg')} 
          style={styles.image}
        />

        <Text style={styles.name}>Petrit Rexha</Text>
        <Text style={styles.title}>Computer Science & Mechanical Engineering Student</Text>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Education</Text>
          <Text style={styles.sectionText}>BSc Computer Science & Mechanical Engineering</Text>
          <Text style={styles.sectionText}>University of Mitrovica "Isa Boletini", 2023–Present</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Skills</Text>
          <Text style={styles.sectionText}>
            • <Text style={styles.blueHighlight}>C# / ASP.NET</Text> — experienced in backend and full-stack web development (API design, MVC, database integration)
          </Text>
          <Text style={styles.sectionText}>
            • <Text style={styles.blueHighlight}>Java</Text> — strong in OOP principles, data structures, and application logic
          </Text>
          <Text style={styles.sectionText}>
            • <Text style={styles.blueHighlight}>Python</Text> — comfortable with scripting, data analysis, and automation
          </Text>
          <Text style={styles.sectionText}>
            • <Text style={styles.blueHighlight}>SQL</Text> (MySQL, PostgreSQL, SQL Server) — advanced query design, optimization, and database management
          </Text>
          <Text style={styles.sectionText}>
            • <Text style={styles.blueHighlight}>Problem solving & Logical Thinking</Text>
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Projects</Text>
          <Text style={styles.sectionText}>
            • <Text style={styles.blueHighlight}>Attendance System for Schools</Text> — C# / ASP.NET with SQL integration, fingerprint authentication
          </Text>
          <Text style={styles.sectionText}>
            • <Text style={styles.blueHighlight}>Hospital Efficiency Robots</Text> — Python-based automation & robotics system
          </Text>
          <Text style={styles.sectionText}>
            • <Text style={styles.blueHighlight}>Casino-Style Website</Text> — C# / ASP.NET web app with interactive games
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>• Contact</Text>
          <Text style={styles.sectionText}>• Email: petrit.rexha@umib.net</Text>
          <Text style={styles.sectionText}>• Phone: +383 49 491 719</Text>
          <Text style={styles.sectionText}>• Location: Kosovo</Text>
          <Text
              style={styles.linkText}
              onPress={() => Linking.openURL('https://www.linkedin.com/in/petrit-rexha/')}
          >
            Connect with me on LinkedIn
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 30,
    paddingHorizontal: 20,
    alignItems: 'center',
    backgroundColor: '#0f0f14',
  },
  image: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 15,
    borderWidth: 2,
    borderColor: '#00ffe0',
    shadowColor: '#00ffe0',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.7,
    shadowRadius: 10,
  },
  name: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#00ffe0',
    textShadowColor: '#00ffe0',
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 8,
  },
  title: {
    fontSize: 16,
    color: '#a0a0a0',
    marginBottom: 20,
    textAlign: 'center',
  },
  section: {
    width: '100%',
    marginVertical: 10,
    backgroundColor: '#1a1a24',
    padding: 15,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#00ffe0',
    shadowColor: '#00ffe0',
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 5,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#00ffe0',
    marginBottom: 8,
    textShadowColor: '#00ffe0',
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 5,
  },
  sectionText: {
    color: '#c0c0c0',
    fontSize: 14,
    marginBottom: 5,
    lineHeight: 20,
  },
  blueHighlight: {
    color: '#498f91ff', 
    fontWeight: '600',
  },
  linkText: {
    color: '#00bfff', 
    textDecorationLine: 'underline',
    fontWeight: '600',
    fontSize: 14,
    marginTop: 5,
  },
});
